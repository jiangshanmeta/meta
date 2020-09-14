/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
    if (nums.length === 0) {
        return [
            1, 2, ];
    }
    nums.push(nums[0], nums[0]);
    const N = nums.length;
    let index = 0;
    while (index < nums.length) {
        if (nums[index] < 1 || nums[index] > N || nums[index] === index + 1) {
            index++;
            continue;
        }
        const num = nums[index];
        if (nums[num - 1] === num) {
            index++;
            continue;
        }

        nums[index] = nums[num - 1];
        nums[num - 1] = num;
    }

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            result.push(i + 1);
        }
    }
    return result;
};
