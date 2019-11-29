

var chip = new Chip();





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



/*
chip = new Chip();

var program = [0];

ui.log("[TEST] newProc");

ui.log(ui.toBin(chip.raw, MMAP_ADDR, MMAP_ADDR+MMAP_SIZE));

var data =    new Uint8Array([0x01, 0x03, 0x02, 0x01]);
//var program = new Uint8Array([2, 4, 6, 8]);

ui.log("[newProc]", chip.newProc({
    dataContent: data,
    programContent: program
}));
*/



/*
ui.log("[TEST] newThread");

data =    new Uint8Array([6, 5, 4]);
//program = new Uint8Array([1, 3, 5, 7]);

ui.log("[newThread]", chip.newThread(0, {
    dataContent: data,
    programContent: program
}));

ui.log(ui.toBin(chip.raw, MMAP_ADDR, MMAP_ADDR+MMAP_SIZE));

ui.log("[TEST] newProc again");

data =    new Uint8Array([1, 2, 3, 4]);
var asm = `
mov €0C, #ffff
mov |04, #0506
`;

ui.log("[newProc]", chip.newProc({
    dataContent: data,
    asmSource: asm
}));

ui.log(ui.toBin(chip.raw, MMAP_ADDR, MMAP_ADDR+MMAP_SIZE));

ui.log("[TEST] newThread again on proc 0");

data =    new Uint8Array([60, 50, 40]);
//program = new Uint8Array([9, 10, 11, 12]);

ui.log("[newThread]", chip.newThread(0, {
    dataContent: data,
    programContent: program
}));

ui.log(ui.toBin(chip.raw, MMAP_ADDR, MMAP_ADDR+MMAP_SIZE));

chip.step();
chip.step();
chip.step();
chip.step();
chip.step();
chip.step();
chip.step();
chip.step();

//ui.log(ui.toHex(chip.mem));

*/
