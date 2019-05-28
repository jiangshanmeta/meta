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
var getMinimumDifference = function(root) {
    let lastNode = null;
    let diff = Infinity;
    
    function inorder(node){
        node.left && inorder(node.left);
        
        if(lastNode !== null && node.val-lastNode.val<diff){
            diff = node.val - lastNode.val;
        }
        lastNode = node;
        
        node.right && inorder(node.right);
    }
    
    inorder(root);
    return diff;
};