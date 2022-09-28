/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    if (k === 0) {
        return new Array(code.length).fill(0);
    } else if (k > 0) {
        let sum = 0;
        for (let i = 1; i <= k; i++) {
            sum += code[i % code.length];
        }
        const result = [];
        for (let i = 0; i < code.length; i++) {
            result[i] = sum;
            sum -= code[(i + 1) % code.length];
            sum += code[(i + 1 + k) % code.length];
        }
        return result;
    } else {
        let sum = 0;
        for (let i = code.length - 1; i >= code.length + k; i--) {
            sum += code[i];
        }
        const result = [];
        for (let i = 0; i < code.length; i++) {
            result[i] = sum;
            sum -= code[(i + code.length + k) % code.length];
            sum += code[i];
        }
        return result;
    }
};
