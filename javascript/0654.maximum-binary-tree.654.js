/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    function helper (nums, startIndex, endIndex) {
        if (endIndex < startIndex) {
            return null;
        }
        // 在范围内找到最大值 构建根节点
        let maxIndex = startIndex;
        let maxVal = nums[startIndex];
        for (let i = startIndex + 1; i <= endIndex; i++) {
            if (nums[i] > maxVal) {
                maxIndex = i;
                maxVal = nums[i];
            }
        }

        const root = new TreeNode(nums[maxIndex]);
        // 构建左右子树
        root.left = helper(nums, startIndex, maxIndex - 1);
        root.right = helper(nums, maxIndex + 1, endIndex);

        return root;
    }

    return helper(nums, 0, nums.length - 1);
};
