// 解决这题有以下思路
// 1. 排序 时间复杂度O(NlogN) 空间复杂度 O(N)
// 2. hash表( Set 就行) 缓存所有元素 然后从1开始查哪个不存在 时间O(N) 空间O(N)
// 3. union find 时间复杂度 O(N) 空间复杂度 O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    // 类似于leetcode128的思路
    // 合并思路是数值更小的作为父节点
    // 并且保存已经出现的最小值
    let minVal = Infinity;
    const parentMap = {};
    const countMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 1 || parentMap[nums[i]] !== undefined) {
            continue;
        }

        let count = 1;
        let parentId = nums[i];
        if (parentMap[nums[i] - 1] !== undefined) {
            parentId = nums[i] - 1;
            while (parentId !== parentMap[parentId]) {
                parentId = parentMap[parentId];
            }
            count += countMap[parentId];
        }

        if (parentMap[nums[i] + 1] !== undefined) {
            count += countMap[nums[i] + 1];
            parentMap[nums[i] + 1] = parentId;
        }

        minVal = Math.min(minVal, nums[i]);

        parentMap[nums[i]] = parentId;
        countMap[parentId] = count;
    }
    // 1 出现过 看以1为根节点的这棵树有多少个节点
    if (minVal === 1) {
        return countMap[1] + 1;
    } else {
        // 1没有出现过 那就是1了
        return 1;
    }
};

// 4. 交换元素 重排数组 时间 O(n) 空间O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
// 因为问的是最小的正数 我们交换元素 尽可能使得 0号位放1 1号位放2
// 即 尽量满足 nums[nums[i]-1] = nums[i]
// 另外注意到 这个值 一定是不大于 nums.length+1的(此时元素对应1～nums.length)
var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        // 负值不用管 过大的值不用管
        while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            const tmp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = tmp;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        // 该位置没有应该存在的元素 问题解决
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    // 竟然是从1～nums.length都有
    return nums.length + 1;
};
