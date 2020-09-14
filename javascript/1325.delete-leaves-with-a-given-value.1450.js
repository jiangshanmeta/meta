/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    // 后序遍历
    if (!root) {
        return root;
    }
    // 先处理左右子树
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);
    // 当前的是叶节点 且 值为 target 干掉这个节点
    if (!root.left && !root.right && root.val === target) {
        return null;
    }

    return root;
};
