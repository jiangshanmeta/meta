/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [];
    const sequence = [];
    const backTracking = (index) => {
        if (index === nums.length) {
            result.push(sequence.slice());
            return;
        }
        backTracking(index + 1);

        sequence.push(nums[index]);
        backTracking(index + 1);
        sequence.pop();
    };
    backTracking(0);
    return result;
};
