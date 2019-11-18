

var ui = {};


ui.changePrompt = function(newPrompt) {
    document.getElementById("prompt").innerHTML = newPrompt+"&nbsp;";
}


ui.changePrompt('$');


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