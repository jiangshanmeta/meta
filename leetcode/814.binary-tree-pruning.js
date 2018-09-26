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
var pruneTree = function(root) {
    if(!root){
        return root;
    }
    
    function dfs(node){
        if(!node){
            return false;
        }
        
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        

        if(!left){
            node.left = null;
        }
        if(!right){
            node.right = null;
        }
        
        return left || right || node.val === 1;
    }
    
    if(dfs(root)){
        return root;
    }
    return null;
    
};