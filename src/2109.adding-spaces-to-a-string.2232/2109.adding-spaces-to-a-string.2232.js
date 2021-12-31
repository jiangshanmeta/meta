/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    const result = [];
    let index = 0;
    for (const spaceIndex of spaces) {
        while (index < spaceIndex) {
            result.push(s[index++]);
        }
        result.push(' ', s[index++]);
    }
    while (index < s.length) {
        result.push(s[index++]);
    }
    return result.join('');
};
