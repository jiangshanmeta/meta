/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    const primes = new Array(n).fill(true);
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!primes[i]) {
            continue;
        }
        count++;
        // 如果一个数是质数，那么它的倍数j不是质数
        for (let j = i * 2; j < n; j += i) {
            primes[j] = false;
        }
    }
    return count;
};
