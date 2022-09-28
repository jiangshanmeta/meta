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
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    let result = null;
    let minDiff = Infinity;
    while (root) {
        if (root.val <= p.val) {
            root = root.right;
        } else {
            const diff = root.val - p.val;
            if (diff < minDiff) {
                result = root;
                minDiff = diff;
            }
            root = root.left;
        }
    }
    return result;
};
