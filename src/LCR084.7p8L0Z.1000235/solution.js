/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);
    const used = new Array(nums.length).fill(false);
    const sequence = [];
    const result = [];
    const backTracking = () => {
        if (sequence.length === nums.length) {
            result.push(sequence.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
                continue;
            }
            used[i] = true;
            sequence.push(nums[i]);
            backTracking();
            sequence.pop();
            used[i] = false;
        }
    };
    backTracking();
    return result;
};
