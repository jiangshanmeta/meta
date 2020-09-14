// 如果不缺这个值，我们可以轻易求得n个数的和(等差数列求和)
// 却数字的数组求和，和n个数求和之差就是missing number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length + 1;
    const sum = nums.reduce((sum, num) => {
        sum += num;
        return sum;
    }, 0);
    return n * (n - 1) / 2 - sum;
};
