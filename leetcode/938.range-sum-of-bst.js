/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    // 就是中序遍历
    function inOrder(node){
        node.left && node.val>L && inOrder(node.left);
        if(node.val>=L && node.val<=R){
            sum += node.val;
        }
        node.right && node.val<R && inOrder(node.right);
    }
    inOrder(root);
    return sum;
};