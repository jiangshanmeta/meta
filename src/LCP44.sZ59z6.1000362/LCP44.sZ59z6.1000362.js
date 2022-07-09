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
var numColor = function (root) {
    const set = new Set();
    const dfs = (node) => {
        set.add(node.val);
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    };
    dfs(root);
    return set.size;
};
