/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    let result = 0;
    while (n > 1) {
        const m = n >>> 1;
        result += m;
        if (n & 1) {
            n = m + 1;
        } else {
            n = m;
        }
    }
    return result;
};
