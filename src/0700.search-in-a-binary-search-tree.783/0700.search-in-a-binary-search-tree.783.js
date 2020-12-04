// 二叉搜索树的基本操作
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (root === null) {
        return [];
    }

    if (root.val === val) {
        return root;
    }

    if (root.val < val) {
        return searchBST(root.right, val);
    }
    return searchBST(root.left, val);
};
