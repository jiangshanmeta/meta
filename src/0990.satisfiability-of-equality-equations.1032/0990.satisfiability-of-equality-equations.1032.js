/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
    const chars = new Array(26);
    for (let i = 0; i < 26; i++) {
        chars[i] = i;
    }
    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] === '!') {
            continue;
        }
        let code1 = equations[i].charCodeAt(0) - 97;
        while (chars[code1] !== code1) {
            code1 = chars[code1];
        }
        let code2 = equations[i].charCodeAt(3) - 97;
        while (chars[code2] !== code2) {
            code2 = chars[code2];
        }
        const newIndex = Math.min(chars[code1], chars[code2]);

        chars[code1] = newIndex;
        chars[code2] = newIndex;
    }
    for (let i = 0; i < 26; i++) {
        let index = chars[i];
        while (chars[index] !== index) {
            index = chars[index];
        }
        chars[i] = index;
    }

    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] === '=') {
            continue;
        }
        const code1 = equations[i].charCodeAt(0) - 97;
        const code2 = equations[i].charCodeAt(3) - 97;
        if (chars[code1] === chars[code2]) {
            return false;
        }
    }
    return true;
};
