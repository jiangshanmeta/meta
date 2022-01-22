/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    const result = [];
    const tmp = [];
    for (const c of s) {
        tmp.push(c);
        if (tmp.length === k) {
            result.push(tmp.join(''));
            tmp.length = 0;
        }
    }
    if (tmp.length) {
        result.push(tmp.join('') + fill.repeat(k - tmp.length));
    }
    return result;
};
