/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 时间复杂度O(n)
var lowestCommonAncestor = function (root, p, q) {
    // 碰到 p或q不需要继续向下探查了
    if (root === null || p === root || q === root) {
        return root;
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    // 如果左右两子树都有节点 则当前节点为最近祖先借点
    if (left && right) {
        return root;
    }
    return left || right;
};
