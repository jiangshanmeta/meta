/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function (root) {
    if (!root) {
        return 0;
    }
    let result = 1;
    function dfs (root, parentVal, count) {
        if (root.val === parentVal + 1) {
            count++;
            result = Math.max(result, count);
        } else {
            count = 1;
        }
        root.left && dfs(root.left, root.val, count);
        root.right && dfs(root.right, root.val, count);
    }
    root.left && dfs(root.left, root.val, 1);
    root.right && dfs(root.right, root.val, 1);
    return result;
};
