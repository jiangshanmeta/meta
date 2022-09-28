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
// DFS
function isNodeHasValue (node, value) {
    if (node === null) {
        return true;
    }
    return node.val === value && isNodeHasValue(node.left, value) && isNodeHasValue(node.right, value);
}

var isUnivalTree = function (root) {
    return isNodeHasValue(root.left, root.val) && isNodeHasValue(root.right, root.val);
};
