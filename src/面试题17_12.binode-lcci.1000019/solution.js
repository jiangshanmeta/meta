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
var convertBiNode = function (root) {
    if (!root) {
        return root;
    }
    root.right = convertBiNode(root.right);
    if (!root.left) {
        return root;
    }
    const newRoot = convertBiNode(root.left);
    let node = newRoot;
    while (node.right) {
        node = node.right;
    }
    node.right = root;
    root.left = null;
    return newRoot;
};
