/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function (n) {
    const primes = calcPrimes(n);
    const primeSet = new Set(primes);
    while (!primeSet.has(n)) {
        const tmp = n;
        let sum = 0;
        while (!primeSet.has(n)) {
            for (const prime of primes) {
                if (n % prime === 0) {
                    sum += prime;
                    n /= prime;
                    break;
                }
            }
        }
        n += sum;
        if (n === tmp) {
            break;
        }
    }
    return n;
};

function calcPrimes (n) {
    const nums = new Array(n + 1).fill(true);
    const result = [];
    for (let i = 2; i < nums.length; i++) {
        if (!nums[i]) {
            continue;
        }
        result.push(i);

        let num = i * 2;
        while (num < nums.length) {
            nums[num] = false;
            num += i;
        }
    }
    return result;
}
