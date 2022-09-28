/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    return postOrder(root) !== -1;
};

function postOrder (root) {
    if (!root) {
        return 0;
    }
    const left = postOrder(root.left);
    if (left === -1) {
        return -1;
    }
    const right = postOrder(root.right);
    if (right === -1) {
        return -1;
    }
    const diff = Math.abs(left - right);
    if (diff > 1) {
        return -1;
    }
    return Math.max(left, right) + 1;
}
