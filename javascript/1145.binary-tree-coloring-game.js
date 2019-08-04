/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
    const xNode = findXNode(root,x);
    const xLeftNodeCount = countNode(xNode.left);
    const xRightNodeCount = countNode(xNode.right);
    // 不是x及其子节点的节点的个数
    const restCount = n-xLeftNodeCount-xRightNodeCount-1;
    const half = n >> 1;
    // 若xLeftNodeCount>half 只需占据xNode.left  xRightNodeCount>half 类似
    // restCount>half 只需占据xNode的父节点  
    if(xLeftNodeCount>half || xRightNodeCount>half || restCount>half){
        return true;
    }
    return false;
};
// 找到x节点
function findXNode(root,x){
    if(!root){
        return null;
    }
    if(root.val === x){
        return root;
    }
    return findXNode(root.left,x) || findXNode(root.right,x);
}
// 计算包含root以及其子节点的个数
function countNode(root){
    if(!root){
        return 0;
    }
    return countNode(root.left)+countNode(root.right)+1;
}