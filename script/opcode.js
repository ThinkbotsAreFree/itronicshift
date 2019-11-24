


var _b = {};    // this is our opcode builder
                // we'll use it to build both documentation and implementation



_b.addressingModes = {
    IM: {
        desc: "constant byte as operand",
        name: "immediateAddressing",
        size: 1
    },
    IMX: {
        desc: "constant word as operand",
        name: "immediateExtendedAddressing",
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
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
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
            ["IMX", "DZ"],
        ],
    },
    ADD: {
        fullName: "Add",
        args: [
            "Value"
        ],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    SUB: {
        fullName: "Substract",
        args: [
            "Value"
        ],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    ADDC: {
        fullName: "Add With Carry",
        args: [
            "Value"
        ],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    SUBC: {
        fullName: "Substract With Carry",
        args: [
            "Value"
        ],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    AND: {
        fullName: "Bitwise AND",
        args: [
            "Value"
        ],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    OR: {
        fullName: "Bitwise OR",
        args: [
            "Value"
        ],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    XOR: {
        fullName: "Bitwise XOR",
        args: [
            "Value"
        ],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    SHL: {
        fullName: "Shift Left",
        args: [],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    SHR: {
        fullName: "Shift Right",
        args: [],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    RL: {
        fullName: "Rotate Left",
        args: [],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    RR: {
        fullName: "Rotate Right",
        args: [],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    RLC: {
        fullName: "Rotate Left With Carry",
        args: [],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    RRC: {
        fullName: "Rotate Right With Carry",
        args: [],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    BIT: {
        fullName: "Get Bit",
        args: [
            "Target",
            "Position"
        ],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
        ],
    },
    BON: {
        fullName: "Set Bit On",
        args: [
            "Target",
            "Position",
        ],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
            ["IM"],
        ],
    },
    BOFF: {
        fullName: "Set Bit Off",
        args: [
            "Target",
            "Position",
        ],
        addressingModes: [
            ["IM", "IMX", "DR", "DRX", "DE", "DZ", "DA", "DI", "IR", "IRX", "IE", "IZ", "IA", "II"],
            ["IM"],
        ],
    },
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

    //  Immediate Extended Addressing
    //  #0000
    IMX: function(size, b0, b1) {
        if (size == 1) return b0;
        return w(b0, b1);
    },
    
    //  Immediate Addressing
    //  #00
    IM: function(size, b0) {
        if (size == 2) return w(b0, 0);
        return b0;
    },

    //  Direct Relative Extended Addressing
    //  $+0000
    DRX: function(size, b0, b1) {
        var addr = this.getProgramCounter() + w(b0, b1) - 0x7FFF;
        var result = this.at(addr);
        if (size == 2) result = w(result, this.at(addr+1));
        return result;
    },

    //  Direct Page Zero Addressing
    //  $+00
    DR: function(size, b0) {
        var addr = this.getProgramCounter() + b0 - 0x7F;
        var result = this.at(addr);
        if (size == 2) result = w(result, this.at(addr+1));
        return result;
    },

    //  Direct Environment Addressing
    //  $€00
    DE: function(size, b0) {
        var addr = w(this.getDataIndex(), b0);
        var result = this.at(addr);
        if (size == 2) result = w(result, this.at(addr+1));
        return result;
    },

    //  Direct Absolute Addressing
    //  $_0000
    DA: function(size, b0, b1) {
        var result = this.at(b0, b1);
        if (size == 2) result = w(result, this.at(b0, b1 + 1));
        return result;
    },

    //  Direct Indexed Addressing
    //  $|0000
    DI: function(size, b0, b1) {
        var addr = w(this.getDataIndex() + b0, b1);
        var result = this.at(addr);
        if (size == 2) result = w(result, this.at(addr+1));
        return result;
    },

    //  Direct Page Zero Addressing
    //  $|00
    DZ: function(size, b0) {
        var addr = w(this.getDataIndex(), b0);
        var result = this.at(addr);
        if (size == 2) result = w(result, this.at(addr+1));
        return result;
    },

    // Indirect Relative Extended Addressing
    //  @+0000
    IRX: function(size, b0, b1) {
        var addr = (this.getProgramCounter() + w(b0, b1) - 0x7FFF) % 0xFFFF;
        var resultAddr = this.raw[addr];
        resultAddr = w(resultAddr, this.raw[(addr+1) % 0xFFFF]);

        // indirect addressing if always indexed
        var result = this.at(this.getDataIndex()+hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex()+hi(resultAddr), 1+lo(resultAddr)))
        return result;
    },

    // Indirect Relative Addressing
    //  @+00
    IR: function(size, b0) {
        var addr = (this.getProgramCounter() + b0 - 0x7F) % 0xFFFF;
        var resultAddr = this.raw[addr];
        resultAddr = w(resultAddr, this.raw[(addr+1) % 0xFFFF]);

        // indirect addressing if always indexed
        var result = this.at(this.getDataIndex()+hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex()+hi(resultAddr), 1+lo(resultAddr)))
        return result;
    },

    // Indirect Environment Addressing
    //  @€00
    IE: function(size, b0) {
        var envStart = this.raw[this.reg[CUR_PROC]];
        var resultAddr = this.at(envStart + (b0 % 13), envStart + ((b0+1) % 13));

        // indirect addressing if always indexed
        var result = this.at(this.getDataIndex()+hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex()+hi(resultAddr), 1+lo(resultAddr)))
        return result;
    },

    // Indirect Absolute Addressing
    //  @_0000
    IA: function(size, b0, b1) {

        // addr is the absolute address of the address of the operand
        var addr = w(b0, b1);

        // resultAddr is the indexed address of operand
        var resultAddr = w(this.at(addr), this.at(addr+1));

        // indirect addressing if always indexed
        var result = this.at(this.getDataIndex()+hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex()+hi(resultAddr), 1+lo(resultAddr)))
        return result;
    },

    //  Indirect Indexed Addressing
    //  @|0000
    II: function(size, b0, b1) {
        
        // addr is the absolute address of the address of the operand
        var addr = w(this.getDataIndex() + b0, b1);

        // resultAddr is the indexed address of operand
        var resultAddr = w(this.at(addr), this.at(addr+1));

        // indirect addressing is always indexed
        var result = this.at(this.getDataIndex()+hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex()+hi(resultAddr), 1+lo(resultAddr)))
        return result;
    },

    //  Indirect Page Zero Addressing
    //  @|00
    IZ: function(size, b0) {
        
        // addr is the absolute address of the address of the operand
        // hi byte is dataIndex, lo byte is the given offset
        var addr = w(this.getDataIndex(), b0);

        // resultAddr is the indexed address of operand
        var resultAddr = w(this.at(addr), this.at(addr+1));

        // indirect addressing is always indexed
        var result = this.at(this.getDataIndex()+hi(resultAddr), lo(resultAddr));
        if (size == 2) result = w(result, this.at(this.getDataIndex()+hi(resultAddr), 1+lo(resultAddr)))
        return result;
    },

};


Chip.prototype.exeTree = {};



// asm syntax

_b.syntax = {
    word: `a:[0-9A-F] b:[0-9A-F] c:[0-9A-F] d:[0-9A-F] _* { return [parseInt(a+b, 16), parseInt(c+d, 16)]; }`,
    byte: `a:[0-9A-F] b:[0-9A-F] _* { return [parseInt(a+b, 16)]; }`,
    IMX: `'#'  val:word { return val; }`,       // immediate extended
    IM:  `'#'  val:byte { return val; }`,       // immediate
    DRX: `'$'? '+' val:word { return val; }`,   // direct relative extended
    DR:  `'$'? '+' val:byte { return val; }`,   // direct relative
    DE:  `'$'? '€' val:byte { return val; }`,   // direct envregister
    DA:  `'$'? '_' val:word { return val; }`,   // direct absolute
    DI:  `'$'? '|' val:word { return val; }`,   // direct indexed
    DZ:  `'$'? '|' val:byte { return val; }`,   // direct page zero
    IRX: `'@+' val:word { return val; }`,       // indirect relative extended
    IR:  `'@+' val:byte { return val; }`,       // indirect relative
    IE:  `'@€' val:byte { return val; }`,       // indirect envregister
    IA:  `'@_' val:word { return val; }`,       // indirect absolute
    II:  `'@|' val:word { return val; }`,       // indirect indexed
    IZ:  `'@|' val:byte { return val; }`,       // indirect page zero
};

_b.opcodeSyntax = {};





// MOV

_b.hexCode = 0x01; // opcode hex value

_b.dest = _b.instructions.MOV.addressingModes[0];
_b.src = _b.instructions.MOV.addressingModes[1];

//_b.movVariants = [];

for (_b.d=0; _b.d<_b.dest.length; _b.d++) {
    for (_b.s=0; _b.s<_b.src.length; _b.s++) {

        if (_b.addressingModes[_b.dest[_b.d]].size + _b.addressingModes[_b.src[_b.s]].size == 3) {

            /*_b.movVariants.push({
                opcode: "MOV."+_b.dest[_b.d]+'.'+_b.src[_b.s],
                destination: _b.addressingModes[_b.dest[_b.d]].desc,
                source: _b.addressingModes[_b.src[_b.s]].desc,
                wordSizedDestination: _b.addressingModes[_b.dest[_b.d]].size == 2
            });*/

            _b.opcodeSyntax["MOV_"+_b.dest[_b.d]+'_'+_b.src[_b.s]] = `"MOV" _+ d:${_b.dest[_b.d]} _* "," _* s:${_b.src[_b.s]} eol { return [${_b.hexCode}].concat(d).concat(s); }`;

            Chip.prototype.exeTree[_b.hexCode] = new Function("byte", `

            `);

            _b.hexCode++;
        }
    }
}





// Arithmetic

_b.mathOpcodes = ["ADD", "ADDC", "SUB", "SUBC", "AND", "OR", "XOR", "SHL", "SHR", "RL", "RR", "RLC", "RRC", "BIT", "BON", "BOFF"];

_b.hexCode = 84;

_b.val =  _b.instructions.MOV.addressingModes[0];

for (_b.mo=0; _b.mo<_b.mathOpcodes.length; _b.mo++) {
    for (_b.am=0; _b.am<_b.val.length; _b.am++) {

        _b.hexCode2 = (_b.mo << 4) + _b.am;

        _b.opcodeSyntax[_b.mathOpcodes[_b.mo]+'_'+_b.val[_b.am]] = `"${_b.mathOpcodes[_b.mo]}" _+ v:${_b.val[_b.am]} eol { if (v.length < 2) v = [0].concat(v); return [${_b.hexCode}, ${_b.hexCode2}].concat(v); }`;
    }
}





// asm parser

_b.parserSource = `
asm = __* src:(eol / ${Object.keys(_b.opcodeSyntax).join(' / ')})* { return src.filter(i => typeof i != "undefined"); }

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

console.log(_b.parserSource);

Chip.prototype.parse = function() {
    
    var parser = peg.generate(_b.parserSource);

    return function(src) {
        readySrc = src
        .toUpperCase()
        // syntactic sugar
        .replace(/(\W)ACC(\W)/g, "$1€0A$2")
        .replace(/(\W)IH(\W)/g, "$1€06$2")
        .replace(/(\W)SP(\W)/g, "$1€04$2")
        .replace(/(\W)PC(\W)/g, "$1€0A22")
         +'\n';
        console.log("readySrc", readySrc);
        return parser.parse(readySrc);
    }
}();









_b = undefined; // was just needed for building stuff


