/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    const result = [];
    const rest = [];
    const sqrt = Math.sqrt(n);
    const index = 1;
    for (let i = 1; i <= sqrt; i++) {
        if (n % i !== 0) {
            continue;
        }
        const r = n / i;
        result.push(i);
        if (i !== r) {
            rest.push(r);
        }
    }
    while (rest.length) {
        result.push(rest.pop());
    }
    if (k > result.length) {
        return -1;
    }
    return result[k - 1];
};
