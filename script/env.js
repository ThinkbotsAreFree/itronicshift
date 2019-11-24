

Chip.prototype.newEnv = function(previous, next) {

    var addr = this.reg[NEXTF_ENV];

    if (previous == "self") {
        previous = addr;
        next = addr;
    }

    this.reg[NEXTF_ENV] = this.raw[addr];
    
    this.setEnv(addr, {
        previousEnv: previous,
        nextEnv: next
    });
    
    return addr;
}


Chip.prototype.freeEnv = function(addr) {

    var next =     this.getEnv(addr, "nextEnv");
    var previous = this.getEnv(addr, "previousEnv");

    // connect "next" of prev and "prev" of next
    this.setEnv(previous, { nextEnv: next });
    this.setEnv(next, { previousEnv: previous});

    // there's a linked list of free envs
    // first is this.reg[NEXTF_ENV], which points to the next, which points to the next...
    // we set "nextEnv" because when an env is free, its addr+0 is used to store the next available env-space
    this.setEnv(addr, { nextEnv: this.reg[NEXTF_ENV] });

    // next free env is now this one
    this.reg[NEXTF_ENV] = addr;
}


Chip.prototype.setEnv = function(addr, opt) {

    if (opt.nextEnv)          this.memRawWriteB(addr,    opt.nextEnv);
    if (opt.previousEnv)      this.memRawWriteB(addr+1,  opt.previousEnv);
    if (opt.programCounter)   this.memRawWriteW(addr+2,  opt.programCounter);
    if (opt.stackPointer)     this.memRawWriteW(addr+4,  opt.stackPointer);
    if (opt.interruptHandler) this.memRawWriteW(addr+6,  opt.interruptHandler);
    if (opt.dataIndex)        this.memRawWriteB(addr+8,  opt.dataIndex);
    if (opt.dataLength)       this.memRawWriteB(addr+9,  opt.dataLength);
    if (opt.accumulator)      this.memRawWriteW(addr+10, opt.accumulator);
    if (opt.flagRegister)     this.memRawWriteB(addr+12, opt.flagRegister);
};


Chip.prototype.getEnv = function(addr, field) {

    switch (field) {
        case "nextEnv":          return this.raw[addr+0];
        case "previousEnv":      return this.raw[addr+1];
        case "programCounter":   return this.raw[addr+2];
        case "stackPointer":     return this.raw[addr+4];
        case "interruptHandler": return this.raw[addr+6];
        case "dataIndex":        return this.raw[addr+8];
        case "dataLength":       return this.raw[addr+9];
        case "accumulator":      return this.raw[addr+10];
        case "flagRegister":     return this.raw[addr+12];
        default:                 throw 'Invalid Env field "'+field+'"';
    }
}


Chip.prototype.newThread = function(procId, opt) {

    // default options
    opt = Object.assign({
        requiredSpace:              1,      // 1 page (256 bytes)
        initialData:                0x00,   // 64 bytes data starting at address page+0
        initialStackCounter:        0x40,   // 32 bytes starting at address page+64
        initialInterruptHandler:    0x60,   // 32 bytes starting at address page+96
        initialProgramCounter:      0x80,   // 128 bytes program starting at address page+128
        initialAccumulator:         0x0000, // initial value zero
        initialFlagRegister:        0x00,   // initial value all flags down
        dataContent:                new ArrayBuffer(),
        programContent:             new ArrayBuffer(),
        stackContent:               new ArrayBuffer(),
        interruptHandlerContent:    new ArrayBuffer()
    }, opt);

    // check: enough unfragmented memory space
    var freeSpace = this.findFreeSpace(opt.requiredSpace);
    if (!freeSpace) return ERR_NOT_ENOUGH_MEMORY;

    // check: content size fit in required space
    if (opt.dataContent.length    +
        opt.programContent.length +
        opt.stackContent.length   +
        opt.interruptHandlerContent > opt.requiredSpace*256) return ERR_NOT_ENOUGH_REQUIRED_SPACE;

    // everything ok, get 1st page's real address
    var page = freeSpace*256;

    var envAddress; // real address of this environment, in ENVS zone

    // check whether this process has already threads

    if (this.sched[procId] == 0) { // this proc is brand new

        envAddress = this.newEnv("self");

    } else { // this process has at least one thread
        
        envAddress = this.newEnv(
            this.sched[procId],                         // previous is current
            this.getEnv(this.sched[procId], "nextEnv")  // next is next of current
        );

        // we'll need the next as it was before overwriting
        var savedNext = this.getEnv(this.sched[procId], "nextEnv");

        // next of current must be set to this one
        this.setEnv(this.sched[procId], { nextEnv: envAddress });

        // previous of next must be set to this one
        this.setEnv(savedNext, { previousEnv: envAddress });

    }

    this.setEnv(envAddress, {
    //  nextEnv:
    //  previousEnv:
        programCounter:     page + opt.initialProgramCounter,
        stackPointer:       page + opt.initialStackCounter,
        interruptHandler:   page + opt.initialInterruptHandler,
        dataIndex:          freeSpace,
        dataLength:         opt.requiredSpace,
        accumulator:        opt.initialAccumulator,
        flagRegister:       opt.initialFlagRegister
    });

    // fill actual memory space
    var dat = page + opt.initialData,
        pc =  page + opt.initialProgramCounter,
        sc =  page + opt.initialStackCounter + opt.stackContent.length,
        ih =  page + opt.initialInterruptHandler;
    this.raw.set(opt.dataContent,             dat );
    this.raw.set(opt.programContent,          pc  );
    this.raw.set(opt.stackContent,            sc  );
    this.raw.set(opt.interruptHandlerContent, ih  );
    
    // mark pages as used
    this.markPagesAs(freeSpace, opt.requiredSpace, 1);

    // for new procs, this new thread is the current one    
    if (this.sched[procId] == 0)  this.sched[procId] = envAddress;

    return SUCCESS;
}

