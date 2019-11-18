

Chip.prototype.nextProc = function() {

    this.reg[CUR_PROC]++;
    if (this.reg[CUR_PROC] > 15 ||          // if reached post-last possible
        this.raw[this.reg[CUR_PROC]] == 0)  // or reached post-last used proc
        this.reg[CUR_PROC] = 0;             // then back to first
}


Chip.prototype.newProc = function(opt) {

    // check: no more than 16 proc
    if (this.reg[NB_PROCS] == 16) return ERR_TOO_MANY_PROCS;

    var outcome = this.newThread(this.reg[NB_PROCS], opt);

    if (outcome == SUCCESS) this.reg[NB_PROCS] += 1;

    return outcome;
}

