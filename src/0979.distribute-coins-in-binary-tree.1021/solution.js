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

var distributeCoins = function (root) {
    let result = 0;
    function postOrder (node) {
        if (node === null) {
            return 0;
        }
        const leftRst = postOrder(node.left);
        const rightRst = postOrder(node.right);
        const centerCoins = node.val;

        result += Math.abs(leftRst);
        result += Math.abs(rightRst);
        return leftRst + rightRst + node.val - 1;
    }
    postOrder(root);
    return result;
};
