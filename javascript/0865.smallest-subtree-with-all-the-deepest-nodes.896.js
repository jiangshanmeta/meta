/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 更进一步的做法是缓存depth的数据
// 这里偷懒每次现查一遍
function getDepth (node) {
    if (!node) {
        return 0;
    }

    const leftDepth = getDepth(node.left);
    const rightDepth = getDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

var subtreeWithAllDeepest = function (root) {
    if (!root) {
        return root;
    }

    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    // 如果左右子树高度相同 则当前节点为要找的节点
    if (leftDepth === rightDepth) {
        return root;
    }
    // 高度不同 看高度更高的那棵子树
    if (leftDepth > rightDepth) {
        return subtreeWithAllDeepest(root.left);
    }

    return subtreeWithAllDeepest(root.right);
};
