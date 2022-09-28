// Given an array A of positive integers, let S be the sum of the digits of the minimal element of A.
// Return 0 if S is odd, otherwise return 1.
/**
 * @param {number[]} A
 * @return {number}
 */
var sumOfDigits = function (A) {
    // 找出最小值
    let min = Math.min(...A);
    // 按位相加
    let sum = 0;
    while (min > 0) {
        sum += min % 10;
        min = (min - min % 10) / 10;
    }
    // 判断奇偶
    return sum & 1 ? 0 : 1;
};
