/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    const numbers = [];
    const counts = [];
    let index = 0;
    while (index < nums.length) {
        const digit = nums[index++];
        let count = 1;
        while (index < nums.length && nums[index] === digit) {
            count++;
            index++;
        }
        numbers.push(digit);
        counts.push(count);
    }
    if (numbers.length === 1) {
        if (numbers[0] === 0) {
            return 0;
        }
        return counts[0] - 1;
    }
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1) {
            result = Math.max(result, counts[i]);
        } else if (counts[i] === 1 && i > 0 && i < numbers.length - 1) {
            result = Math.max(result, counts[i - 1] + counts[i + 1]);
        }
    }
    return result;
};
