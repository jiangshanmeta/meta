/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// DFS
var sumOfLeftLeaves = function (root) {
    if (!root) {
        return 0;
    }

    let sum = 0;

    function inner (node, flag) {
        if (!node.left && !node.right && flag) {
            sum += node.val;
            return;
        }
        node.left && inner(node.left, true);
        node.right && inner(node.right, false);
    }

    inner(root, false);
    return sum;
};
