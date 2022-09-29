/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
    let result = 1;
    let lastCode = s.charCodeAt(0);
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (code === lastCode + 1) {
            count++;
            result = Math.max(result, count);
        } else {
            count = 1;
        }
        lastCode = code;
    }
    return result;
};
