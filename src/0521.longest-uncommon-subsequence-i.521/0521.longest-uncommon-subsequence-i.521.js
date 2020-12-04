/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
// 1.如果两个字符串长度不相等 取较长的本身作为特殊子序列 显然它不是较短的子序列
// 2.如果两个字符串长度相等 若完全一致 则没有符合的 返回-1
// 若两个字符串不同 取任何一个本身作为特殊子序列 它一定不是另一个的子序列
var findLUSlength = function (a, b) {
    if (a === b) {
        return -1;
    }
    return Math.max(a.length, b.length);
};
