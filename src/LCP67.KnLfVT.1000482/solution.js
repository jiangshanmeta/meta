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
var expandBinaryTree = function (root, dir = 0) {
    if (!root) {
        return root;
    }

    root.left = expandBinaryTree(root.left, -1);
    root.right = expandBinaryTree(root.right, 1);

    if (dir === 0) {
        return root;
    }

    if (dir === 1) {
        const doc = new TreeNode(-1);
        doc.right = root;
        return doc;
    }

    const doc = new TreeNode(-1);
    doc.left = root;
    return doc;
};
