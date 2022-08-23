/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    const flags = new Array(26).fill(false);
    for (const c of s) {
        const code = c.charCodeAt(0) - 97;
        if (flags[code]) {
            return c;
        }
        flags[code] = true;
    }
    return '';
};
