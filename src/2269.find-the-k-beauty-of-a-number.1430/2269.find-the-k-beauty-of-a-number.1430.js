/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    const str = String(num);
    let result = 0;
    for (let i = 0; i < str.length - k + 1; i++) {
        const sub = +str.slice(i, i + k);
        if (sub !== 0 && num % sub === 0) {
            result++;
        }
    }
    return result;
};
