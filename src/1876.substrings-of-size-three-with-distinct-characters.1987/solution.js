/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let result = 0;
    for (let i = 0; i + 2 < s.length; i++) {
        if (s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) {
            result++;
        }
    }
    return result;
};
