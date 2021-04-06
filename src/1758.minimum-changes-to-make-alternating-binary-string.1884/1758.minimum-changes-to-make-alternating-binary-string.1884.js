/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let result1 = 0;
    let result2 = 0;
    for (let i = 0; i < s.length; i++) {
        if (i & 1) {
            if (s[i] === '1') {
                result2++;
            } else {
                result1++;
            }
        } else {
            if (s[i] === '1') {
                result1++;
            } else {
                result2++;
            }
        }
    }
    return Math.min(result1, result2);
};
