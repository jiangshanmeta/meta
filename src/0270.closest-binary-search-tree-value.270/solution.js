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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
    let minDiff = Infinity;
    let result = 0;
    function dfs (root) {
        const diff = Math.abs(root.val - target);
        if (diff < minDiff) {
            result = root.val;
            minDiff = diff;
        }
        root.left && dfs(root.left);
        root.right && dfs(root.right);
    }
    root && dfs(root);
    return result;
};
