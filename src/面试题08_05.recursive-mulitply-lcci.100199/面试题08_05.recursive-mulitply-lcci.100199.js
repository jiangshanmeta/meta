/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function (A, B) {
    let result = 0;
    while (B) {
        if (B & 1) {
            result += A;
        }
        A <<= 1;
        B >>= 1;
    }
    return result;
};
