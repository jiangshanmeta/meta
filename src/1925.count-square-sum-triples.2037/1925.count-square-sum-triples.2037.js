/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
    let result = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i; j < n; j++) {
            const c = Math.sqrt(i ** 2 + j ** 2);
            if (Number.isInteger(c) && c <= n) {
                result += 2;
            }
        }
    }
    return result;
};
