

const // general purpose
    SINGLE_ENV_SIZE =   13,
    SCHED_SIZE =        16
    MMAP_ADDR =         SCHED_SIZE,
    MMAP_SIZE =         32,
    ENVS_ADDR =         MMAP_ADDR + MMAP_SIZE,
    ENVS_SIZE =         256 - MMAP_SIZE - SCHED_SIZE;

const // outcome & error codes
    SUCCESS                         = Symbol("SUCCESS"),
    ERR_TOO_MANY_PROCS              = Symbol("ERR_TOO_MANY_PROCS"),
    ERR_NOT_ENOUGH_MEMORY           = Symbol("ERR_NOT_ENOUGH_MEMORY"),
    ERR_NOT_ENOUGH_REQUIRED_SPACE   = Symbol("ERR_NOT_ENOUGH_REQUIRED_SPACE");

const // registers
    CUR_PROC =  0,
    NEXTF_ENV = 1,
    NB_PROCS =  2;

const // flags
    CARRY = 0,
    ZERO =  1;


function hi(w) {     return w >> 8 & 0xFF;                  }
function lo(w) {     return w & 0xFF;                       }
function w(hi, lo) { return (hi % 0xFF) << 8 | (lo % 0xFF); }


function Chip() {

    this.mem = new ArrayBuffer(0xFFFF);
    this.reg = new Uint8Array(3);

    this.raw =      new Uint8Array(this.mem                        );
    this.sched =    new Uint8Array(this.mem, 0,         SCHED_SIZE );
    this.mmap =     new Uint8Array(this.mem, MMAP_ADDR, MMAP_SIZE  );
    this.envs =     new Uint8Array(this.mem, ENVS_ADDR, ENVS_SIZE  );

    this.reg[NEXTF_ENV] = ENVS_ADDR;

    // init env slots
    var p = ENVS_ADDR;
    while (p < 255) {
        this.memRawWriteB(p, p + SINGLE_ENV_SIZE);
        p += SINGLE_ENV_SIZE;
    }

    // page zero is reserved;
    this.markPagesAs(0, 1, 1);

    return this;
}


Chip.prototype.memRawWriteB = function(addr, b) {

    if (addr >= MMAP_ADDR && addr < MMAP_ADDR+MMAP_SIZE) throw("[write] "+addr+' '+b);

    this.raw[addr] = b;
}


Chip.prototype.memRawWriteW = function(addr, w) {

    this.raw[addr] =   hi(w);
    this.raw[addr+1] = lo(w);
}


Chip.prototype.getProgramCounter = function() {

    return ((this.raw[this.raw[this.reg[CUR_PROC]]+0x02]) << 8) + this.raw[this.raw[this.reg[CUR_PROC]]+0x03];
}


Chip.prototype.getDataIndex = function() {

    return this.raw[this.raw[this.reg[CUR_PROC]]+0x08];
}


Chip.prototype.at = function(addr1, addr2) {
    
    if (typeof addr2 == "undefined") return this.raw[addr1 % 0xFFFF];
    return this.raw[w(addr1, addr2) % 0xFFFF];
}

