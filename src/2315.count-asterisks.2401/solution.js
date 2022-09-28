/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    let result = 0;
    let inner = false;
    for (const c of s) {
        if (c === '|') {
            inner = !inner;
        } else if (!inner && c === '*') {
            result++;
        }
    }
    return result;
};
