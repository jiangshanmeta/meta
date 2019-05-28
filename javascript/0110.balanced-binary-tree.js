/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 后序遍历判断是否平衡
var isBalanced = function(root) {
    if(!root){
        return true;
    }
    
    if(!isBalanced(root.left) || !isBalanced(root.right)){
        return false;
    }
    
    
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    
    if(Math.abs(leftDepth-rightDepth)>1){
        return false;
    }
    
    return true;
};

function getDepth(root){
    if(!root){
        return 0;
    }
    
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    
    return Math.max(leftDepth,rightDepth) + 1;
}