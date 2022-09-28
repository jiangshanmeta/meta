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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function (root) {
    if (!root || !root.left) {
        return root;
    }
    return flip(root.left, root);
};

function flip (root, parent) {
    if (!root) {
        return parent;
    }
    const newRoot = flip(root.left, root);
    root.left = parent.right;
    parent.right = null;
    root.right = parent;
    parent.left = null;
    return newRoot;
}
