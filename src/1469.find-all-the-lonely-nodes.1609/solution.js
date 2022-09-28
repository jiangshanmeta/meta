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
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
    const result = [];
    function dfs (root, flag) {
        if (flag) {
            result.push(root.val);
        }
        if (root.left && root.right) {
            dfs(root.left, false);
            dfs(root.right, false);
        } else if (root.left) {
            dfs(root.left, true);
        } else if (root.right) {
            dfs(root.right, true);
        }
    }
    root && dfs(root, false);
    return result;
};
