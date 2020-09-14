// 水题不解释
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
var invertTree = function (root) {
    if (!root) {
        return root;
    }

    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    root.left !== null && invertTree(root.left);
    root.right !== null && invertTree(root.right);

    return root;
};
