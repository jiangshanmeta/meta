/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    if (k < 0) {
        return 0;
    }

    const map = {};
    let count = 0;

    if (k === 0) {
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (map[num] === undefined) {
                map[num] = 1;
            } else {
                map[num]++;
                map[num] === 2 && count++;
            }
        }
        return count;
    }

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }

    nums = [
        ...new Set(nums), ];
    const index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i] + k] !== undefined) {
            count++;
        }
    }

    return count;
};
