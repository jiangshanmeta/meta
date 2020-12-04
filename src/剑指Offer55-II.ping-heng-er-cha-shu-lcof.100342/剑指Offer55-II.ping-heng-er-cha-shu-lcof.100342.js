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
    return postOrder(root)[0];
};

function postOrder (root) {
    if (!root) {
        return [
            true, 0, ];
    }
    const [
        leftIs, leftDepth, ] = postOrder(root.left);
    if (!leftIs) {
        return [
            false, 0, ];
    }
    const [
        rightIs, rightDepth, ] = postOrder(root.right);
    if (!rightIs) {
        return [
            false, 0, ];
    }
    const diff = Math.abs(leftDepth - rightDepth);
    if (diff > 1) {
        return [
            false, 0, ];
    }

    return [
        true,
        Math.max(leftDepth, rightDepth) + 1,
    ];
}
