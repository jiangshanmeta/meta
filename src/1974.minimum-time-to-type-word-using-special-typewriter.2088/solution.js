/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
    let prevCode = 'a'.charCodeAt(0);
    let result = word.length;
    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        const delta = Math.abs(code - prevCode);
        result += Math.min(delta, 26 - delta);
        prevCode = code;
    }
    return result;
};
