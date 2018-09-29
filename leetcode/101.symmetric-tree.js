// 水题不解释
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
var isSymmetric = function(root) {
    if(root === null){
        return true;
    }
    
    function isSymetriTree(node1,node2){
        if(node1 === null && node2 === null){
            return true;
        }        
        
        if(node1 !== null && node2 !== null){
            return node1.val === node2.val && isSymetriTree(node1.left,node2.right) && isSymetriTree(node1.right,node2.left);
        }
        
        return false;
    }
    
    return isSymetriTree(root.left,root.right);
};