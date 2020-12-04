/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
    // 和leetcode 264类似，只是264把质数限定为了 2 3 5 这里是传入的，所以需要一个辅助数组存对应索引
    const sequence = [
        1, ];
    const indexs = new Array(primes.length).fill(0);
    while (sequence.length < n) {
        const newNum = Math.min(...indexs.map((index, i) => sequence[index] * primes[i]));
        sequence.push(newNum);
        for (let i = 0; i < indexs.length; i++) {
            while (sequence[indexs[i]] * primes[i] <= newNum) {
                indexs[i]++;
            }
        }
    }
    return sequence[n - 1];
};
