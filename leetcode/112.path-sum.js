/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    function helper(node,cur){
        if(!node){
            return false;
        }
        
        if(!node.left && !node.right){
            return node.val + cur === sum;
        }
        
        if(!node.left){
            return helper(node.right,cur+node.val);
        }
        
        if(!node.right){
            return helper(node.left,cur+node.val);
        }
        
        return helper(node.left,cur+node.val) || helper(node.right,cur+node.val);
    }
    
    return helper(root,0);
};