/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    const map = Object.create(null);
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return nums[i];
        }
        map[nums[i]] = true;
    }
};
