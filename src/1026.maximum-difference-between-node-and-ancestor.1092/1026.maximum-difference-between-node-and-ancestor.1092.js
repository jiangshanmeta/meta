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
var maxAncestorDiff = function (root) {
    return Math.max(dfs(root.left, root.val, root.val), dfs(root.right, root.val, root.val));
};

// max为祖先节点中最大的值
// min为祖先节点中最小的值
function dfs (node, max, min) {
    if (!node) {
        return -Infinity;
    }
    // 当前节点的值和祖先节点中的最值求差
    const curResult = Math.max(
        Math.abs(max - node.val),
        Math.abs(min - node.val)
    );
    // 更新最值
    max = Math.max(node.val, max);
    min = Math.min(node.val, min);
    return Math.max(curResult, dfs(node.left, max, min), dfs(node.right, max, min));
}
