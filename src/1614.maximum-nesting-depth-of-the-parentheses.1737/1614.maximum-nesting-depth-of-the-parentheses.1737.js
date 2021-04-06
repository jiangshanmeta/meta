/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let result = 0;
    let current = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            current++;
            result = Math.max(current, result);
        } else if (s[i] === ')') {
            current--;
        }
    }
    return result;
};
