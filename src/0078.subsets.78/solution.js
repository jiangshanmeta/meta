/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    function backTracking (list, nums, sequence, index) {
        sequence.push(list.slice());
        for (let i = index; i < nums.length; i++) {
            list.push(nums[i]);
            backTracking(list, nums, sequence, i + 1);
            list.pop();
        }
    }
    const sequence = [];
    backTracking([], nums, sequence, 0);
    return sequence;
};
