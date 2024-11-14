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
var findBottomLeftValue = function (root) {
    if (!root) {
        return 0;
    }
    const nodes = [];
    const dfs = (root, index) => {
        if (index === nodes.length) {
            nodes.push(root.val);
        }
        root.left && dfs(root.left, index + 1);
        root.right && dfs(root.right, index + 1);
    };
    dfs(root, 0);
    return nodes[nodes.length - 1];
};
