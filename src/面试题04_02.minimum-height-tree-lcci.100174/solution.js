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
var sortedArrayToBST = function (nums) {
    return buildTree(nums, 0, nums.length - 1);
};

function buildTree (nums, left, right) {
    if (left > right) {
        return null;
    }
    const mid = (left + right) >> 1;
    const root = new TreeNode(nums[mid]);
    root.left = buildTree(nums, left, mid - 1);
    root.right = buildTree(nums, mid + 1, right);
    return root;
}
