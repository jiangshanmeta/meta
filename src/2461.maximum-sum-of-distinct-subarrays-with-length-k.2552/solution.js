/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    const map = new Map();
    let result = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let index = i - map.size;
            const end = map.get(nums[i]);
            while (index <= end) {
                sum -= nums[index];
                map.delete(nums[index]);
                index++;
            }
        }
        sum += nums[i];
        map.set(nums[i], i);
        if (map.size === k) {
            result = Math.max(result, sum);
            sum -= nums[i - k + 1];
            map.delete(nums[i - k + 1]);
        }
    }

    return result;
};
