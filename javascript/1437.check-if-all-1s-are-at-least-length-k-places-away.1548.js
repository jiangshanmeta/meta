/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let index = nums.indexOf(1);
    if (index === -1) {
        return true;
    }
    let nextIndex = index + 1;
    while (nextIndex < nums.length) {
        while (nextIndex < nums.length && nums[nextIndex] === 0) {
            nextIndex++;
        }
        if (nextIndex === nums.length) {
            return true;
        }
        if (nextIndex - index < k + 1) {
            return false;
        }
        index = nextIndex;
        nextIndex = index + 1;
    }
    return true;
};
