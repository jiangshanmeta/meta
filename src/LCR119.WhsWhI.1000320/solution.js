/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
    const countMap = {};
    const parentMap = {};
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (parentMap[nums[i]] !== undefined) {
            continue;
        }
        let count = 1;
        let parentId = nums[i];
        if (parentMap[nums[i] - 1] !== undefined) {
            parentId = nums[i] - 1;
            while (parentMap[parentId] !== parentId) {
                parentId = parentMap[parentId];
            }
            count += countMap[parentId];
        }

        if (parentMap[nums[i] + 1] !== undefined) {
            count += countMap[nums[i] + 1];
            parentMap[nums[i] + 1] = parentId;
        }

        parentMap[nums[i]] = parentId;
        countMap[parentId] = count;

        max = Math.max(max, count);
    }

    return max;
};
