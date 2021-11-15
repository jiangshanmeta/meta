/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const used = new Array(nums.length).fill(false);
    const sequence = [];
    const result = [];
    const backTracking = () => {
        if (sequence.length === nums.length) {
            result.push(sequence.slice());
            return;
        }
        for (let i = 0; i < used.length; i++) {
            if (used[i]) {
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
