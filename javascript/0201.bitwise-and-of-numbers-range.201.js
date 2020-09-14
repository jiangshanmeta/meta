/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
    // 只需要找到m和n最左边的公共部分
    let count = 0;
    while (m !== n) {
        m >>>= 1;
        n >>>= 1;
        count++;
    }
    return m << count;
};
