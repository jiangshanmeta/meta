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
var sumNumbers = function (root) {
    let result = 0;
    const dfs = (root, val) => {
        val = val * 10 + root.val;
        if (!root.left && !root.right) {
            result += val;
            return;
        }
        root.left && dfs(root.left, val);
        root.right && dfs(root.right, val);
    };
    root && dfs(root, 0);
    return result;
};
