/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) {
        return;
    }
    function helper (node) {
        if (!node) {
            return node;
        }

        node.right && helper(node.right);

        if (node.left) {
            const leftStart = helper(node.left);
            let leftEnd = leftStart;

            while (leftEnd.right) {
                leftEnd = leftEnd.right;
            }

            leftEnd.right = node.right;
            node.right = leftStart;

            node.left = null;
        }

        return node;
    }

    helper(root);
};
