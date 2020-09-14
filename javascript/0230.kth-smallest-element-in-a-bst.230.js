/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// BST 中遍历的结果就是从小到大的
var kthSmallest = function (root, k) {
    let counter = 0;
    let rst;

    function inorderTravel (node) {
        node.left && inorderTravel(node.left);

        counter++;
        if (counter === k) {
            rst = node.val;
            return;
        }

        node.right && inorderTravel(node.right);
    }
    inorderTravel(root);
    return rst;
};
