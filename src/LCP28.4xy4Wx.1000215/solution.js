/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var purchasePlans = function (nums, target) {
    const mod = 10 ** 9 + 7;
    nums.sort((a, b) => a - b);
    let result = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        while (left < right && nums[left] + nums[right] > target) {
            right--;
        }
        if (left < right) {
            result = (result + right - left) % mod;
        }
        left++;
    }
    return result;
};
