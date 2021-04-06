/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
    let index = 1;
    while (index < s.length && s[index] === '1') {
        index++;
    }
    while (index < s.length && s[index] === '0') {
        index++;
    }
    return index === s.length;
};
