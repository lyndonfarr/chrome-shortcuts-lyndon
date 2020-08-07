let start = 65;
let alphabet = [ `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

function duplicate() {
    open(location);
};

let links = {
    b: `https://www.browserstack.com/?campaignid=10028073288&adgroupid=103863232547&adid=434390274153&gclid=EAIaIQobChMI2I6Yx5C-6gIViK3tCh386QK5EAAYASAAEgIcl_D_BwE`,
    c: `https://www.coursera.org/`,
    f: `https://www.freecodecamp.org/learn/`,
    g: `https://github.com/`,
    p: `https://mail.protonmail.com/login`,
    u: `https://www.udemy.com/home/my-courses/learning/`,
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