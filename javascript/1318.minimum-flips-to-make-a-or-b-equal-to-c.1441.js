/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
    let result = 0;
    while (a || b || c) {
        const cDigit = c & 1;
        const aDigit = a & 1;
        const bDigit = b & 1;
        if (cDigit === 0) {
            if (aDigit) {
                result++;
            }
            if (bDigit) {
                result++;
            }
        } else {
            if ((!aDigit) && (!bDigit)) {
                result++;
            }
        }
        a >>>= 1;
        b >>>= 1;
        c >>>= 1;
    }
    return result;
};
