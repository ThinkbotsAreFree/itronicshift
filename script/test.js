

var chip;





/*

ui.log("[TEST] findFreeSpace");

chip = new Chip();

ui.log("markPagesAs(7,5,1)");
chip.markPagesAs(7,5,1);
ui.log("markPagesAs(2,2,1)");
chip.markPagesAs(2,2,1);

ui.log(ui.toBin(chip.mmap));

ui.log("[findFreeSpace(2)]", chip.findFreeSpace(2));
ui.log("[findFreeSpace(3)]", chip.findFreeSpace(3));
ui.log("[findFreeSpace(4)]", chip.findFreeSpace(4));

ui.log();

*/





chip = new Chip();

ui.log("[TEST] newProc");

ui.log(ui.toBin(chip.raw, MMAP_ADDR, MMAP_ADDR+MMAP_SIZE));

var data =    new Uint8Array([9, 8, 7]);
var program = new Uint8Array([2, 4, 6, 8]);

ui.log("[newProc]", chip.newProc({
    dataContent: data,
    programContent: program
}));

ui.log("[TEST] newThread");

data =    new Uint8Array([6, 5, 4]);
program = new Uint8Array([1, 3, 5, 7]);

ui.log("[newThread]", chip.newThread(0, {
    dataContent: data,
    programContent: program
}));

ui.log(ui.toBin(chip.raw, MMAP_ADDR, MMAP_ADDR+MMAP_SIZE));

ui.log("[TEST] newProc again");

data =    new Uint8Array([1, 2, 3]);
program = new Uint8Array([10, 30, 50, 70]);

ui.log("[newProc]", chip.newProc({
    dataContent: data,
    programContent: program
}));

ui.log(ui.toBin(chip.raw, MMAP_ADDR, MMAP_ADDR+MMAP_SIZE));






ui.log(ui.toHex(chip.mem));







