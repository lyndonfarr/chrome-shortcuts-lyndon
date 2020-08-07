let start = 65;
let alphabet = [ `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

function duplicate() {
    open(location);
};

let library = {
    command: {
        action(func) {
            func();
        },
        check(e) {
            return e.metaKey;
        },
        shortcuts: {
            d: duplicate,
        },
    },
    link: {
        action(webAddress) {
            location = webAddress;
        },
        check(e) {
            return e.metaKey && e.ctrlKey;
        },
        shortcuts: links,
    },
    newTab: {
        action(webAddress) {
            open(webAddress, `_blank`);
        },
        check(e) {
            return e.metaKey && e.shiftKey;
        },
        shortcuts: links,
    }
};

function alphabetLoop(e, shortcuts, func) {
    for (const [key, value] of Object.entries(shortcuts)) {
        let keyCode = alphabet.indexOf(key) + start;
        if (keyCode >= start) {
            if (e.keyCode == keyCode) {
                e.preventDefault();
                func(value);
            }
        }
    }
};

addEventListener(`keydown`, (e) => {
    for (const [key, value] of Object.entries(library).reverse()) {
        if (value.check(e) && !e.altKey) {
            alphabetLoop(e, value.shortcuts, value.action)
        }
    }
});