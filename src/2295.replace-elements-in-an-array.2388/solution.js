/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (nums, operations) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (const [from, to, ] of operations) {
        const index = map.get(from);
        map.delete(from);
        map.set(to, index);
    }
    for (const [target, index, ] of map) {
        nums[index] = target;
    }

    return nums;
};
