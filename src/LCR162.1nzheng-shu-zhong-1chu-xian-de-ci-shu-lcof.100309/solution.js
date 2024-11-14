/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    if (n < 1) {
        return 0;
    }
    if (n < 10) {
        return 1;
    }
    const digit = Math.floor(Math.log10(n));
    const base = Math.pow(10, digit);
    const first = Math.floor(n / base);

    return countDigitOne(n - base * first) + Math.min(n, base * 2 - 1) - base + 1 + first * digit * Math.pow(10, digit - 1);
};
