

var ui = {};



ui.onInputKeypress = function() {
    var key = window.event.keyCode;

    if (key === 13) {
        document.getElementById("term-output").innerHTML += `<div>&gt; ${document.getElementById("term-input").value}</div>`;
        setTimeout(function() { document.getElementById("term-input").value = ''; }, 0);
        return false;
    }
    else {
        return true;
    }        
}


ui.toHex = function(ab, start, end) {

    var a = new Uint8Array(ab);

    start = start || 0;
    end =   end   || a.length;

    var result = [];

    for (var i=start; i<end; i++) {
        if (i%32 == 0) result.push("<br>");
        if (i%256 == 0) result.push("<br>");
        result.push(a[i].toString(16).padStart(2, '0').toUpperCase().replace("00", ".."));
    };

    return result.join(' ');
};


ui.toBin = function(ab, start, end) {

    var a = new Uint8Array(ab);

    start = start || 0;
    end =   end   || a.length;

    var result = [];

    for (var i=start; i<end; i++) {
        if (i%8 == 0) result.push("<br>");
        result.push(a[i].toString(2).padStart(8, '0').toUpperCase().replace(/0/g, "."));
    };

    return result.join(' ');
};


ui.log = function() {

    var txt = '';
    for (var i = 0; i < arguments.length; i++) {
        txt += arguments[i].toString()+' ';
    }
    document.getElementById("term-output").innerHTML += txt+"<br>";
};

ui.xScale = 128;
ui.yScale = 128;
ui.xGap = 16;
ui.yGap = 16;

ui.w = function(size) {
    return ui.xScale*size + ui.xGap*(size-1);
}

ui.h = function(size) {
    return ui.xScale*size + ui.xGap*(size-1);
}



var iso = new Isotope( "#master", {
    itemSelector: ".screen",
    originTop: false,
    layoutMode: "masonryHorizontal",
    columnWidth: 80,
    gutter: 16,
});

// iso.arrange({ filter: ".demo" });


for (ui.f=0; ui.f<10; ui.f++) {

    shortcut.add("Ctrl+"+ui.f, new Function(`
        $("#f${ui.f} .fcom").addClass("pressed");
        window.event.preventDefault();
        return false;
    `), { type: "keydown" });

    shortcut.add("Ctrl+"+ui.f, new Function(`
        $("#f${ui.f} .fcom").removeClass("pressed");
        window.event.preventDefault();
        return false;
    `), { type: "keyup" });
}

/*
function doc_keyUp(e) {

    e.preventDefault();
}
// register the handler 
document.addEventListener('keydown', doc_keyUp, false);
*/