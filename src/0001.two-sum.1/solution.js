/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // hash缓存已访问的数据
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !== undefined) {
            return [
                map[target - nums[i]], i, ];
        }
        map[nums[i]] = i;
    }
};
