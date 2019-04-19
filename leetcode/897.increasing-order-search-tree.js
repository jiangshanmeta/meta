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
var increasingBST = function(root) {
    if(!root){
        return root;
    }
    
    if(root.right){
        root.right = increasingBST(root.right);
    }
    
    if(!root.left){
        return root;
    }
    
    const startNode = increasingBST(root.left);
    let node = startNode;
    while(node.right){
        node = node.right;
    }
    

    node.right = root;
    root.left = null;
    
    return startNode;
};