/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
    if (N === 0) {
        return 1;
    }
    let base = 1;
    let result = 0;
    while (N > 0) {
        // 二进制最后一位为0
        if (!(N & 1)) {
            result += base;
        }
        N >>= 1;
        base <<= 1;
    }
    return result;
};
