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
var maximumAverageSubtree = function(root) {
    return postOrder(root)[2];
};

function postOrder(node){
    // 题目限定node.val>=0 所以max初始为0 若不限定则应为-Infinity
    let max = 0;
    // sum是node及其子节点的val的和
    let sum = node.val;
    // count是node及其子节点的数量
    let count = 1;
    if(node.left){
        const rstLeft = postOrder(node.left);
        sum += rstLeft[0];
        count += rstLeft[1];
        max = Math.max(max,rstLeft[2]);
    }
    
    if(node.right){
        const rstRight = postOrder(node.right);
        sum += rstRight[0];
        count += rstRight[1];
        max = Math.max(max,rstRight[2]);
    }
    // sum/count是以node为根节点的树的平均值
    // Math.max(max,sum/count) 是node及其子树中平均值的最大值
    return [sum,count,Math.max(max,sum/count)];
}