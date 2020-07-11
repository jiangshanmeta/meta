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
    if(!root){
        return true;
    }
    return helper(root.left,root.right);
};

function helper(root1,root2){
    if(!root1 && !root2){
        return true;
    }
    if(root1 && root2){
        return root1.val === root2.val && helper(root1.left,root2.right) && helper(root1.right,root2.left);
    }
    return false;
}