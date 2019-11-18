

Chip.prototype.markPagesAs = function(startpage, nbpages, used) {

    var bytePos = Math.floor(startpage/8);
    var bitPos = 7-startpage%8;
        
    for (var p=0; p<nbpages; p++) {

        if (used)
            this.mmap[bytePos] |= (1 << bitPos);
        else
            this.mmap[bytePos] &= (0 << bitPos);

        bitPos--;
        if (bitPos == -1) { bitPos = 7; bytePos++; }
    }
}


Chip.prototype.findFreeSpace = function(space) {

    var bit =  0,
        byte = 0,
        page = 0,
        consecutive = 0,
        addr = 0;

    while (consecutive < space && page < 256) {

        if ((this.mmap[byte] & (128 >> bit)) == 0) {
            if (consecutive == 0) addr = page;
            consecutive += 1;
        } else
            consecutive = 0;

        bit++; if (bit == 8) { bit = 0; byte++; }
        page++;
    }

    return (consecutive == space) ? addr : 0;
}


