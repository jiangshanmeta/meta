/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    let sum = 0;
    let count = 0;
    for (const num of nums) {
        if (num % 6 === 0) {
            sum += num;
            count++;
        }
    }
    if (count === 0) {
        return 0;
    }
    return Math.floor(sum / count);
};
