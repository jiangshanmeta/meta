/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    // N是从1开始的
    // sequence 丑数递增序列
    const sequence = [
        1, ];
    // 下一个丑数一定是前面的数 的2倍 3倍 5倍
    // indexN 对应元素的N倍是 N倍中第一个大于sequence最大值的
    let index2 = 0;
    let index3 = 0;
    let index5 = 0;
    while (sequence.length < n) {
        const newNum = Math.min(sequence[index2] * 2, sequence[index3] * 3, sequence[index5] * 5);
        sequence.push(newNum);
        while (sequence[index2] * 2 <= newNum) {
            index2++;
        }
        while (sequence[index3] * 3 <= newNum) {
            index3++;
        }
        while (sequence[index5] * 5 <= newNum) {
            index5++;
        }
    }
    return sequence[n - 1];
};
