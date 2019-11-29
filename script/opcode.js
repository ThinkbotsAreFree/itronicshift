


var _b = {};    // this is our opcode builder
// we'll use it to build both documentation and implementation



_b.addressingModes = {
    UI: {
        desc: "constant byte as operand",
        name: "unsignedImmediateAddressing",
        size: 1
    },
    UIX: {
        desc: "constant word as operand",
        name: "unsignedImmediateExtendedAddressing",
        size: 2
    },
    SI: {
        desc: "constant byte as operand",
        name: "signedImmediateAddressing",
        size: 1
    },
    SIX: {
        desc: "constant word as operand",
        name: "signedImmediateExtendedAddressing",
        size: 2
    },
    DR: {
        desc: "signed byte + current PC is the address of the operand",
        name: "directRelativeAddressing",
        size: 1
    },
    DRX: {
        desc: "signed word + current PC is the address of the operand",
        name: "directRelativeExtendedAddressing",
        size: 2
    },
    DE: {
        desc: "envregister that contains the operand",
        name: "directEnvironmentAddressing",
        size: 1
    },
    DZ: {
        desc: "address in thread's page zero that contains the operand",
        name: "directPageZeroAddressing",
        size: 1
    },
    DA: {
        desc: "absolute address that contains the operand",
        name: "directAbsoluteAddressing",
        size: 2
    },
    DI: {
        desc: "address relative to dataIndex that contains the operand",
        name: "directIndexedAddressing",
        size: 2
    },
    IR: {
        desc: "signed byte + current PC is the address of the address of the operand",
        name: "indirectRelativeAddressing",
        size: 1
    },
    IRX: {
        desc: "signed word + current PC is the address of the address of the operand",
        name: "indirectRelativeExtendedAddressing",
        size: 2
    },
    IE: {
        desc: "envregister that contains the address of the operand",
        name: "indirectEnvironmentAddressing",
        size: 1
    },
    IZ: {
        desc: "address in thread's page zero that contains the address of the operand",
        name: "indirectPageZeroAddressing",
        size: 1
    },
    IA: {
        desc: "absolute address that contains the address of the operand",
        name: "indirectAbsoluteAddressing",
        size: 2
    },
    II: {
        desc: "address relative to dataIndex that contains the address of the operand",
        name: "indirectIndexedAddressing",
        size: 2
    }
};


_b.byteSizedAddressingModes = Object.keys(_b.addressingModes).filter(am => _b.addressingModes[am].size == 1);
_b.wordSizedAddressingModes = Object.keys(_b.addressingModes).filter(am => _b.addressingModes[am].size == 2);


_b.instructions = {
    DAT: {
        fullName: "Data",
        args: [],
        addressingModes: [
        ],
    },
    MOV: {
        fullName: "Move",
        args: [
            "Destination",
            "Source"
        ],
        addressingModes: [
            ["DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],

        ],
    },
    EXCH: {
        fullName: "Exchange",
        args: [
            "Item 1",
            "Item 2"
        ],
        addressingModes: [
            ["DE", "DZ"],
            ["DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    PUSH: {
        fullName: "Push",
        args: [
            "Value"
        ],
        addressingModes: [

        ],
    },
    POP: {
        fullName: "Pop",
        args: [
            "Destination"
        ],
        addressingModes: [

        ],
    },
    CALL: {
        fullName: "Call",
        args: [
            "Subroutine"
        ],
        addressingModes: [

        ],
    },
    RET: {
        fullName: "Return",
        args: [],
        addressingModes: [

        ],
    },
    BMOV: {
        fullName: "Block Move",
        args: [
            "Destination",
            "Source",
            "Length"
        ],
        addressingModes: [
            ["DA", "DI",],
            ["DA", "DI"],
            ["UIX", "DZ"],
        ],
    },
    ADD: {
        fullName: "Add",
        args: [
            "Value"
        ],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    SUB: {
        fullName: "Substract",
        args: [
            "Value"
        ],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    MUL: {
        fullName: "Multiply",
        args: [
            "Value"
        ],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    DIV: {
        fullName: "Divide",
        args: [
            "Value"
        ],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    MOD: {
        fullName: "Modulo",
        args: [],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    AND: {
        fullName: "Bitwise AND",
        args: [
            "Value"
        ],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    OR: {
        fullName: "Bitwise OR",
        args: [
            "Value"
        ],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    XOR: {
        fullName: "Bitwise XOR",
        args: [
            "Value"
        ],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    NOT: {
        fullName: "Bitwise NOT",
        args: [],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    SHL: {
        fullName: "Shift Left",
        args: [],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    SHR: {
        fullName: "Shift Right",
        args: [],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    ROL: {
        fullName: "Rotate Left",
        args: [],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    ROR: {
        fullName: "Rotate Right",
        args: [],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    BIT: {
        fullName: "Constant Bit",
        args: [
            "Target",
        ],
        addressingModes: [
            ["UI", "UIX", "SI", "SIX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    // empty slot
    // empty slot
    JMP: {
        fullName: "Jump",
        args: [
            "Address"
        ],
        addressingModes: [

        ],
    },
    JMZ: {
        fullName: "Jump If Zero",
        args: [
            "Address"
        ],
        addressingModes: [

        ],
    },
    JMN: {
        fullName: "Jump If Not Zero",
        args: [
            "Address"
        ],
        addressingModes: [

        ],
    },
    DJN: {
        fullName: "Decrement And Jump If Not Zero",
        args: [
            "Value",
            "Address"
        ],
        addressingModes: [

        ],
    },
    SPL: {
        fullName: "Split",
        args: [
            "Environment"
        ],
        addressingModes: [

        ],
    },
    SEQ: {
        fullName: "Skip If Equal",
        args: [
            "Value"
        ],
        addressingModes: [

        ],
    },
    SNE: {
        fullName: "Skip If Not Equal",
        args: [
            "Value"
        ],
        addressingModes: [

        ],
    },
    SLT: {
        fullName: "Skip If Lower Than",
        args: [
            "Value"
        ],
        addressingModes: [

        ],
    },
    SLE: {
        fullName: "Skip If Lower Or Equal",
        args: [
            "Value"
        ],
        addressingModes: [

        ],
    },
    SGT: {
        fullName: "Skip If Greater Than",
        args: [
            "Value"
        ],
        addressingModes: [

        ],
    },
    SGE: {
        fullName: "Skip If Greater Or Equal",
        args: [
            "Value"
        ],
        addressingModes: [

        ],
    },
    INT: {
        fullName: "Generate Interrupt",
        args: [
            "Identifier"
        ],
        addressingModes: [

        ],
    },
    NOP: {
        fullName: "No Operation",
        args: [],
        addressingModes: [

        ],
    },
};



_b.labelAMODE = Object.keys(_b.addressingModes);
_b.labelINSTR = Object.keys(_b.instructions);





Chip.prototype.fetch = {

    //  Unsigned Immediate Extended Addressing
    //  #0000
    UIX: function (size, addressOnly, b0, b1) {
        if (size == 1) return b0;
        return w(b0, b1);
    },

    //  Unsigned Immediate Addressing
    //  #00
    UI: function (size, addressOnly, b0, b1) {
        if (size == 2) return w(0, b1);
        return b1;
    },

    //  Signed Immediate Extended Addressing
    //  #-0000
    SIX: function (size, addressOnly, b0, b1) {
        if (size == 1) return fromSignedByte(b0);
        return fromSignedWord(w(b0, b1));
    },

    //  Signed Immediate Addressing
    //  #-00
    SI: function (size, addressOnly, b0, b1) {
        if (size == 2) return fromSignedWord(w(0, b1));
        return fromSignedByte(b1);
    },

    //  Direct Relative Extended Addressing
    //  $&0000
    DRX: function (size, addressOnly, b0, b1) {
        var addr = this.getProgramCounter() + w(b0, b1) - 0x8000;
        if (addressOnly) return addr;
        var result = this.at(addr);
        if (size == 2) result = w(result, this.at(addr + 1));
        return result;
    },

    //  Direct Page Zero Addressing
    //  $&00
    DR: function (size, addressOnly, b0, b1) {
        var addr = this.getProgramCounter() + b1 - 0x80;
        if (addressOnly) return addr;
        var result = this.at(addr);
        if (size == 2) result = w(result, this.at(addr + 1));
        return result;
    },

    //  Direct Environment Addressing
    //  $€00
    DE: function (size, addressOnly, b0, b1) {
        var addr = this.raw[this.reg[CUR_PROC]] + b1;
        console.log("[addr]", addr);
        if (addressOnly) return addr;
        var result = this.at(addr);
        if (size == 2) result = w(result, this.at(addr + 1));
        return result;
    },

    //  Direct Absolute Addressing
    //  $_0000
    DA: function (size, addressOnly, b0, b1) {
        if (addressOnly) return w(b0, b1);
        var result = this.at(b0, b1);
        if (size == 2) result = w(result, this.at(b0, b1 + 1));
        return result;
    },

    //  Direct Indexed Addressing
    //  $|0000
    DI: function (size, addressOnly, b0, b1) {
        var addr = w(this.getDataIndex() + b0, b1);
        if (addressOnly) return addr;
        var result = this.at(addr);
        if (size == 2) result = w(result, this.at(addr + 1));
        return result;
    },

    //  Direct Page Zero Addressing
    //  $|00
    DZ: function (size, addressOnly, b0, b1) {
        var addr = w(this.getDataIndex(), b1);
        if (addressOnly) return addr;
        var result = this.at(addr);
        if (size == 2) result = w(result, this.at(addr + 1));
        return result;
    },

    // Indirect Relative Extended Addressing
    //  @&0000
    IRX: function (size, addressOnly, b0, b1) {
        var addr = (this.getProgramCounter() + w(b0, b1) - 0x8000) % 0xFFFF;
        var resultAddr = this.raw[addr];
        resultAddr = w(resultAddr, this.raw[(addr + 1) % 0xFFFF]);
        if (addressOnly) return resultAddr;

        // indirect addressing is always indexed
        var result = this.at(this.getDataIndex() + hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex() + hi(resultAddr), 1 + lo(resultAddr)))
        return result;
    },

    // Indirect Relative Addressing
    //  @&00
    IR: function (size, addressOnly, b0, b1) {
        var addr = (this.getProgramCounter() + b1 - 0x80) % 0xFFFF;
        var resultAddr = this.raw[addr];
        resultAddr = w(resultAddr, this.raw[(addr + 1) % 0xFFFF]);
        if (addressOnly) return resultAddr;

        // indirect addressing is always indexed
        var result = this.at(this.getDataIndex() + hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex() + hi(resultAddr), 1 + lo(resultAddr)))
        return result;
    },

    // Indirect Environment Addressing
    //  @€00
    IE: function (size, addressOnly, b0, b1) {
        var envStart = this.raw[this.reg[CUR_PROC]];
        var resultAddr = this.at(envStart + (b1 % 13), envStart + ((b1 + 1) % 13));
        if (addressOnly) return resultAddr;

        // indirect addressing is always indexed
        var result = this.at(this.getDataIndex() + hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex() + hi(resultAddr), 1 + lo(resultAddr)))
        return result;
    },

    // Indirect Absolute Addressing
    //  @_0000
    IA: function (size, addressOnly, b0, b1) {

        // addr is the absolute address of the address of the operand
        var addr = w(b0, b1);

        // resultAddr is the indexed address of operand
        var resultAddr = w(this.at(addr), this.at(addr + 1));
        if (addressOnly) return resultAddr;

        // indirect addressing is always indexed
        var result = this.at(this.getDataIndex() + hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex() + hi(resultAddr), 1 + lo(resultAddr)))
        return result;
    },

    //  Indirect Indexed Addressing
    //  @|0000
    II: function (size, addressOnly, b0, b1) {

        // addr is the absolute address of the address of the operand
        var addr = w(this.getDataIndex() + b0, b1);

        // resultAddr is the indexed address of operand
        var resultAddr = w(this.at(addr), this.at(addr + 1));
        if (addressOnly) return resultAddr;

        // indirect addressing is always indexed
        var result = this.at(this.getDataIndex() + hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex() + hi(resultAddr), 1 + lo(resultAddr)))
        return result;
    },

    //  Indirect Page Zero Addressing
    //  @|00
    IZ: function (size, addressOnly, b0, b1) {

        // addr is the absolute address of the address of the operand
        // hi byte is dataIndex, lo byte is the given offset
        var addr = w(this.getDataIndex(), b1);

        // resultAddr is the indexed address of operand
        var resultAddr = w(this.at(addr), this.at(addr + 1));
        if (addressOnly) return resultAddr;

        // indirect addressing is always indexed
        var result = this.at(this.getDataIndex() + hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex() + hi(resultAddr), 1 + lo(resultAddr)))
        return result;
    },

};


Chip.prototype.ALU = {
    ADD: function(value) {
        this.setAccumulator((this.getAccumulator() + value));
    },
    SUB: function (value) {
        this.setAccumulator((this.getAccumulator() - value));
    },
    MUL: function (value) {
        this.setAccumulator((this.getAccumulator() * value));
    },
    DIV: function (value) {
        this.setAccumulator(Math.floor(this.getAccumulator() / value));
    },
    MOD: function (addr) {
        this.setAccumulator((this.getAccumulator() % value));
    },
    AND: function (value) {
        this.setAccumulator((this.getAccumulator() & value));
    },
    OR: function (value) {
        this.setAccumulator((this.getAccumulator() | value));
    },
    XOR: function (value) {
        this.setAccumulator((this.getAccumulator() ^ value));
    },
    NOT: function (addr) {
        this.memRawWriteB(addr, ~this.at(addr));
    },
    SHL: function (addr) {
        this.memRawWriteB(addr, this.at(addr) << 1);
    },
    SHR: function (addr) {
        this.memRawWriteB(addr, this.at(addr) >>> 1);
    },
    ROL: function (addr) {
        var bit = ((this.at(addr) & 0x80) == 0x80) ? 0x01 : 0;
        this.memRawWriteB(addr, (this.at(addr) << 1) + bit);
    },
    ROR: function (addr) {
        var bit = ((this.at(addr) & 0x01) == 0x01) ? 0x80 : 0;
        this.memRawWriteB(addr, (this.at(addr) >>> 1) + bit);
    },
    BIT: function (value) {
        this.setAccumulator(1 << value);
    },
    // empty slot
    // empty slot
}


Chip.prototype.exeTree = {};



// asm syntax

_b.syntax = {
    word: `a:[0-9A-F] b:[0-9A-F] c:[0-9A-F] d:[0-9A-F] _* { return [parseInt(a+b, 16), parseInt(c+d, 16)]; }`,
    byte: `a:[0-9A-F] b:[0-9A-F] _* { return [parseInt(a+b, 16)]; }`,
    SIX:  `'#-' val:word { var v = toSignedWord(w(val[0], val[1]));
                return [hi(v), lo(v)]; }`,          // signed immediate extended
    SI:   `'#-' val:byte {
                return [toSignedByte(val[0])]; }`,  // signed immediate
    UIX:  `'#' '+'? val:word { return val; }`,  // unsigned immediate extended
    UI:   `'#' '+'? val:byte { return val; }`,  // unsigned immediate
    DRX:  `'$'? '&' val:word { return val; }`,  // direct relative extended
    DR:   `'$'? '&' val:byte { return val; }`,  // direct relative
    DE:   `'$'? '€' val:byte { return val; }`,  // direct envregister
    DA:   `'$'? '_' val:word { return val; }`,  // direct absolute
    DI:   `'$'? '|' val:word { return val; }`,  // direct indexed
    DZ:   `'$'? '|' val:byte { return val; }`,  // direct page zero
    IRX:  `'@&' val:word { return val; }`,      // indirect relative extended
    IR:   `'@&' val:byte { return val; }`,      // indirect relative
    IE:   `'@€' val:byte { return val; }`,      // indirect envregister
    IA:   `'@_' val:word { return val; }`,      // indirect absolute
    II:   `'@|' val:word { return val; }`,      // indirect indexed
    IZ:   `'@|' val:byte { return val; }`,      // indirect page zero
};

_b.opcodeSyntax = {};





// MOV

_b.hexCode = 0x01; // opcode hex value

_b.dest = _b.instructions.MOV.addressingModes[0];
_b.src = _b.instructions.MOV.addressingModes[1];

for (_b.d = 0; _b.d < _b.dest.length; _b.d++) {
    for (_b.s = 0; _b.s < _b.src.length; _b.s++) {

        if (_b.addressingModes[_b.dest[_b.d]].size + _b.addressingModes[_b.src[_b.s]].size == 3) {

            _b.opcodeSyntax["MOV_" + _b.dest[_b.d] + '_' + _b.src[_b.s]] = `"MOV" _+ d:${_b.dest[_b.d]} _* "," _* s:${_b.src[_b.s]} eol { return [${_b.hexCode}].concat(d).concat(s); }`;

            Chip.prototype.exeTree[_b.hexCode] = new Function("byte", `

                console.log("exeTree executing: hexCode ${_b.hexCode} (MOV)");
                console.log("destAM: ${_b.dest[_b.d]}");
                console.log("srcAM:  ${ _b.src[_b.s]}");

                var destAddr, srcValue;

                var valSize = this.getFlag(MOV_WORDS) ? 2 : 1
                
                if (_b.addressingModes.${_b.dest[_b.d]}.size == 1) {
                    destAddr = this.fetch.${_b.dest[_b.d]}.call(this, valSize, true, 0, byte[1]);
                    srcValue = this.fetch.${ _b.src[_b.s]}.call(this, valSize, false, byte[2], byte[3]);
                } else {
                    destAddr = this.fetch.${_b.dest[_b.d]}.call(this, valSize, true, byte[1], byte[2]);
                    srcValue = this.fetch.${ _b.src[_b.s]}.call(this, valSize, false, 0, byte[3]);
                }

                console.log("[destAddr]", destAddr.toString(16));
                console.log("[srcValue]", srcValue.toString(16));

                if (this.getFlag(MOV_WORDS))
                    this.memRawWriteW(destAddr, srcValue);
                else
                    this.memRawWriteB(destAddr, srcValue);
                
            `);

            _b.hexCode++;
        }
    }
}





// Arithmetic

_b.mathOpcodes = ["ADD", "MUL", "SUB", "DIV", "AND", "OR", "XOR", "SHL", "SHR", "ROL", "ROR", "MOD", "NOT", "BIT"];

_b.hexCode = 96;

Chip.prototype.exeTree[_b.hexCode] = {};

_b.val = Object.keys(_b.addressingModes);

for (_b.mo = 0; _b.mo < _b.mathOpcodes.length; _b.mo++) {
    for (_b.am = 0; _b.am < _b.val.length; _b.am++) {

        _b.hexCode2 = (_b.mo << 4) + _b.am;

        _b.opcodeSyntax[_b.mathOpcodes[_b.mo] + '_' + _b.val[_b.am]] = `"${_b.mathOpcodes[_b.mo]}" _+ v:${_b.val[_b.am]} eol { if (v.length < 2) v = [0].concat(v); return [${_b.hexCode}, ${_b.hexCode2}].concat(v); }`;

        Chip.prototype.exeTree[_b.hexCode][_b.hexCode2] = new Function("byte", `

            var fetched = this.fetch.${_b.val[_b.am]}.call(this, 2, ${
                _b.mathOpcodes[_b.mo] == "NOT" ||
                _b.mathOpcodes[_b.mo] == "SHL" || // these need addresses, not values
                _b.mathOpcodes[_b.mo] == "SHR" ||
                _b.mathOpcodes[_b.mo] == "ROL" ||
                _b.mathOpcodes[_b.mo] == "ROR"
            }, byte[2], byte[3]);

            this.ALU.${_b.mathOpcodes[_b.mo]}.call(this, fetched);
        `);
    }
}





// asm parser

_b.parserSource = `
asm = __* src:(eol / ${Object.keys(_b.opcodeSyntax).join(' / ')})* { Chip.prototype.parsed = []; src.filter(i => typeof i != "undefined").forEach(i => Chip.prototype.parsed = Chip.prototype.parsed.concat(i)); return Chip.prototype.parsed; }

_
= [ \\t]

__
= [ \\t\\r\\n]

eol
= _* comment* __+ { return undefined; }

comment
= ";" [^\\r\\n]*


`;



for (_b.s in _b.syntax) {
    _b.parserSource += `
${_b.s}
= ${_b.syntax[_b.s]}
`;
}

for (_b.s in _b.opcodeSyntax) {
    _b.parserSource += `
${_b.s}
= ${_b.opcodeSyntax[_b.s]}
`;
}

//console.log(_b.parserSource);

Chip.prototype.parse = function () {

    var parser = peg.generate(_b.parserSource);

    return function (src) {
        readySrc = src
            .toUpperCase()
            // syntactic sugar
            .replace(/(\W)ACC(\W)/g, "$1€0A$2")
            .replace(/(\W)IH(\W)/g, "$1€06$2")
            .replace(/(\W)SP(\W)/g, "$1€04$2")
            .replace(/(\W)PC(\W)/g, "$1€0A22")
            + '\n';
        //console.log(readySrc);
        return parser.parse(readySrc);
    }
}();









// _b = undefined; // was just needed for building stuff


