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
var sumNumbers = function (root) {
    if (!root) {
        return 0;
    }
    const sequences = [];
    function helper (node, num) {
        if (!node.left && !node.right) {
            return sequences.push(num * 10 + node.val);
        }
        if (!node.left) {
            return helper(node.right, num * 10 + node.val);
        }
        if (!node.right) {
            return helper(node.left, num * 10 + node.val);
        }
        helper(node.left, num * 10 + node.val);
        helper(node.right, num * 10 + node.val);
    }
    helper(root, 0);

    return sequences.reduce((sum, num) => {
        sum += num;
        return sum;
    }, 0);
};
