/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let result = 1;
    let index = 0;
    let leftZero = 0;
    let leftOnes = 0;
    while (index < nums.length && nums[index] === 0) {
        index++;
        leftZero++;
    }
    while (index < nums.length) {
        let count = 0;
        while (index < nums.length && nums[index] === 1) {
            index++;
            count++;
        }
        if (leftZero === 0) {
            result = Math.max(result, count);
        } else if (leftZero === 1) {
            result = Math.max(result, count + 1 + leftOnes);
        } else {
            result = Math.max(result, count + 1);
        }
        leftOnes = count;
        count = 0;
        while (index < nums.length && nums[index] === 0) {
            index++;
            count++;
        }
        if (count > 0) {
            result = Math.max(result, leftOnes + 1);
        }
        leftZero = count;
    }

    return result;
};
