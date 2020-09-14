/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (nums.lengthh === 0 || k === 0) {
        return [];
    }

    const list = [];
    for (let i = 0; i < k; i++) {
        while (list.length && list[list.length - 1] < nums[i]) {
            list.pop();
        }
        list.push(nums[i]);
    }
    const result = [
        list[0], ];
    let left = 0;
    let right = k;
    while (right < nums.length) {
        if (list[0] === nums[left++]) {
            list.shift();
        }
        while (list.length && list[list.length - 1] < nums[right]) {
            list.pop();
        }
        list.push(nums[right++]);
        result.push(list[0]);
    }
    return result;
};
