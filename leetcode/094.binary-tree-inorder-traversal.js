// 中序遍历不解释

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root){
        return [];
    }
    
    function inorder(node,sequence){
        node.left && inorder(node.left,sequence);
        sequence.push(node.val);
        node.right && inorder(node.right,sequence);
    }
    const sequence = [];
    inorder(root,sequence);
    return sequence;
};