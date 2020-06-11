/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root){
        return root;
    }
    if(root === p || root === q){
        return root;
    }
    const left = lowestCommonAncestor(root.left,p,q);
    const right = lowestCommonAncestor(root.right,p,q);
    if(left && right){
        return root;
    }
    return left || right;
};