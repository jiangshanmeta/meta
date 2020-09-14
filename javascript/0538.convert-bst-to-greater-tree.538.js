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
var convertBST = function (root) {
    if (!root) {
        return root;
    }
    let sum = 0;
    function getSum (node) {
        sum += node.val;
        node.left && getSum(node.left);
        node.right && getSum(node.right);
    }

    getSum(root);

    function inOrderTravel (node) {
        node.left && inOrderTravel(node.left);

        sum -= node.val;
        node.val += sum;

        node.right && inOrderTravel(node.right);
    }

    inOrderTravel(root);

    return root;
};
