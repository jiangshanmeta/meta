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
var longestZigZag = function(root) {
    return postOrder(root)[0]-1;
};
// 返回的三个值的含义
// 0 root及其子树的最长值
// 1 root向左zigzag的最大值
// 2 root向右zigzag的最大值
function postOrder(root){
    if(!root){
        return [0,0,0];
    }
    if(!root.left && !root.right){
        return [1,1,1];
    }
    const leftResult = postOrder(root.left);
    const rightResult = postOrder(root.right);
    const max = Math.max(leftResult[0],rightResult[0],leftResult[2]+1,rightResult[1]+1);
    return [max,leftResult[2]+1,rightResult[1]+1];
}