/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    // 可以发现，当n为4的倍数的时候，失败，其他条件 成功
    return !!(n%4);
};