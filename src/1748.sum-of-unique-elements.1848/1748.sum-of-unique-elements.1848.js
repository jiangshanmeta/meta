/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    const map = new Map();
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const count = map.get(nums[i]);
            if (count === 1) {
                result -= nums[i];
                map.set(nums[i], 2);
            }
        } else {
            result += nums[i];
            map.set(nums[i], 1);
        }
    }
    return result;
};
