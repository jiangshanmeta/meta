/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        if (i & 1) {
            result.push(String.fromCharCode(s.charCodeAt(i - 1) + (+s[i])));
        } else {
            result.push(s[i]);
        }
    }
    return result.join('');
};
