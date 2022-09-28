/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    let index1 = 0;
    // 固定index1 剩下的就是 排好序的two sum 用双指针解法
    // 时间复杂度O(N^2) 空间复杂度O(N) (因为要排序)
    while (index1 < nums.length - 2) {
        let index2 = index1 + 1;
        let index3 = nums.length - 1;
        const target = -nums[index1];
        while (index2 < index3) {
            const sum = nums[index2] + nums[index3];
            if (sum > target) {
                index3--;
            } else if (sum < target) {
                index2++;
            } else {
                result.push([
                    nums[index1], nums[index2], nums[index3],
                ]);
                const valLeft = nums[index2++];
                const rightVal = nums[index3--];
                // 题目要求不同的三元组，所以把相同的元素直接跳过
                while (index2 < index3 && nums[index2] === valLeft) {
                    index2++;
                }

                while (index2 < index3 && nums[index3] === rightVal) {
                    index3--;
                }
            }
        }
        // 跳过重复的元素
        const val1 = nums[index1++];
        while (index1 < nums.length - 2 && nums[index1] === val1) {
            index1++;
        }
    }
    return result;
};
