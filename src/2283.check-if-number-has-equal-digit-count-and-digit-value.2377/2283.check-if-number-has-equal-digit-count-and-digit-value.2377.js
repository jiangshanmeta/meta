/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    const result = new Array(10).fill(0);
    for (const c of num) {
        result[c]++;
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== String(result[i])) {
            return false;
        }
    }
    return true;
};
