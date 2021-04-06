/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
    let result = 1;
    const mod = 10 ** 9 + 7;
    for (let i = 2; i <= n; i++) {
        const length = getBit(i);
        let mask = 1 << (length - 1);
        while (mask > 0) {
            const bit = (i & mask) > 0 ? 1 : 0;
            result = (result * 2 + bit) % mod;
            mask >>= 1;
        }
    }
    return result;
};

function getBit (n) {
    let result = 0;
    while (n > 0) {
        result++;
        n >>= 1;
    }
    return result;
}
