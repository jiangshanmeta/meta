/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const mod = 10 ** 9 + 7;
var sumRootToLeaf = function (root) {
    if (!root) {
        return 0;
    }

    return dfs(root, 0) % mod;
};

function dfs (node, value) {
    if (!node.left && !node.right) {
        return (value * 2 + node.val);
    } else {
        value = (value * 2 + node.val) % mod;
        const left = (node.left && dfs(node.left, value)) || 0;
        const right = (node.right && dfs(node.right, value)) || 0;
        return (left + right) % mod;
    }
}
