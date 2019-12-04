

var ui = {};


ui.toHex = function(ab, start, end) {

    var a = new Uint8Array(ab);

    start = start || 0;
    end = end || a.length;

    var result = [];

    for (var i = start; i < end; i++) {
        if (i % 32 == 0) result.push("<br>");
        if (i % 256 == 0) result.push("<br>");
        result.push(a[i].toString(16).padStart(2, '0').toUpperCase().replace("00", ".."));
    };

    return result.join(' ');
};


ui.toBin = function(ab, start, end) {

    var a = new Uint8Array(ab);

    start = start || 0;
    end = end || a.length;

    var result = [];

    for (var i = start; i < end; i++) {
        if (i % 8 == 0) result.push("<br>");
        result.push(a[i].toString(2).padStart(8, '0').toUpperCase().replace(/0/g, "."));
    };

    return result.join(' ');
};


ui.xScale = 128;
ui.yScale = 128;
ui.xGap = 16;
ui.yGap = 16;

ui.w = function(size) {
    return ui.xScale * size + ui.xGap * (size - 1);
}

ui.h = function(size) {
    return ui.xScale * size + ui.xGap * (size - 1);
}


var iso = new Isotope("#master", {
    itemSelector: ".screen",
    originTop: false,
    layoutMode: "masonryHorizontal",
    columnWidth: 80,
    gutter: 16,
    stagger: 40,
    transitionDuration: 400
});

// iso.arrange({ filter: ".demo" });


hotkeys('ctrl+1,ctrl+2,ctrl+3,ctrl+4,ctrl+5,ctrl+6,ctrl+7,ctrl+8,ctrl+9,ctrl+0',
    { keyup: true }, function(event, handler) {

        var k = handler.key.substr(-1);
        var fcom = $(`#f${k} .fcom`);
        if (event.type === 'keydown') {
            fcom.addClass("pressed");
            ui.say(fcom.text());
        } else if (event.type === 'keyup') {
            fcom.removeClass("pressed");
            ui.ctrlKey(k);
        }
        event.preventDefault();
    });

ui.speak = function(txt) {

    const ut = new SpeechSynthesisUtterance(txt);
    ut.lang = "en-US";
    speechSynthesis.speak(ut);
}

ui.mute = function(txt) { };

ui.say = ui.mute;

ui.sound = false;

ui.toggleSound = function() {
    if (ui.sound) {
        ui.sound = false;
        ui.say = ui.mute;
        $("#sound-toggle").removeClass("on");
    } else {
        ui.sound = true;
        $("#sound-toggle").addClass("on");
        ui.say = ui.speak;
        ui.say("Sound interface activated.");
    }
}

ui.toggleFullScreen = function(invert) {
    if (window.fullScreen ^ invert) {
        $("#fullscreen-toggle").removeClass("on");
        ui.say("Immersion mode deactivated.");
    } else {
        $("#fullscreen-toggle").addClass("on");
        ui.say("Immersion mode activated.");
    }
}

ui.toggleFullScreen(true);

hotkeys("F4", ui.toggleSound);
hotkeys("F11", ui.toggleFullScreen);


ui.menu = {
    1: {
        label: "Test 1",
        show: ["term-io", "term-io-2"],
        hide: ["cons-20", "cons-21"]
    },
    2: {
        label: "Foo 2",
        show: ["cons-20", "cons-21"]
    },
    3: {
        label: "Menu 2",
        menu: {
            1: {
                label: "Hide terms",
                hide: ["term-io", "term-io-2"]
            },
            2: {
                label: "Back test",
                back: true
            }
        }
    }
}

ui.menuPath = [];

ui.menuDir = function() {

    var current = ui.menu;
    ui.menuPath.forEach(p => { current = current[p].menu; });
    return current;
}

ui.ctrlKey = function(k) {

    var current = ui.menuDir();

    if (current[k].show) ui.show(current[k].show);
    if (current[k].hide) ui.hide(current[k].hide);
    if (current[k].menu) ui.menuPath.push(k);
    if (current[k].back) ui.menuPath.pop();

    ui.refreshCtrlKeys();
}

ui.refreshCtrlKeys = function() {

    var current = ui.menuDir();

    for (var k=0; k<10; k++) {
        $(`#f${k} .fcom`).html(current[k] ? current[k].label : "&nbsp;");
    }
}

ui.refreshCtrlKeys();


ui.show = function(screenList) {

    //console.log("[show]", screenList);
    screenList.forEach(s => {
        if (!ui.visibleScreens.includes(s)) ui.visibleScreens.push(s);
    });

    //console.log("[vs]", ui.visibleScreens.map(s=>'#'+s).join(','));

    iso.arrange({ filter: ui.visibleScreens.map(s=>'#'+s).join(',') });
}


ui.hide = function(screenList) {

    //console.log("[hide]", screenList);
    ui.visibleScreens = ui.visibleScreens.filter(s => !screenList.includes(s));

    //console.log("[vs]", ui.visibleScreens.map(s=>'#'+s).join(','));

    iso.arrange({ filter: ui.visibleScreens.map(s=>'#'+s).join(',') });
}


ui.visibleScreens = [];
$(".screen").each(function() { ui.visibleScreens.push(this.id); });

