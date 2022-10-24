/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
    const powers = [];
    const mod = 10 ** 9 + 7;
    let base = 1;
    while (n > 0) {
        if (n & 1) {
            powers.push(base);
        }
        base <<= 1;
        n >>>= 1;
    }
    const prefixMultiply = new Array(powers.length + 1);
    prefixMultiply[0] = 1;
    for (let i = 0; i < powers.length; i++) {
        prefixMultiply[i + 1] = powers[i] * prefixMultiply[i];
    }

    return queries.map(([left, right, ]) => (prefixMultiply[right + 1] / prefixMultiply[left]) % mod);
};
