

Chip.prototype.step = function() {

    this.stepThread();

    this.nextProc();
    
    // get next thread
    this.raw[this.reg[CUR_PROC]] = this.raw[this.raw[this.reg[CUR_PROC]]];
}


Chip.prototype.stepThread = function() {

    var pc = this.getProgramCounter();
    var instr = [this.at(pc), this.at(pc+1), this.at(pc+2), this.at(pc+3)];

    this.execute(instr);

    this.setProgramCounter(pc + 4);
}


Chip.prototype.execute = function(instr) {

    var et = this.exeTree;

//    console.log("\n[INSTR]", instr.map(v => v.toString(16)));
    var f;
    instr.some(i => {
        if (typeof et[i] == "function") f = et[i];
        if (typeof et[i] == "object") et = et[i];
        return f;
    });

    if (f) {
    
//        console.log("[executing]", instr);

        // we want "this" to be the chip
        f.call(this, instr);

    } else {

//        console.log("[not executed] instr", instr.map(v => v.toString(16)));
    }
}



