// 后序遍历

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

function postorderTraversalSequence(node,sequence){
    node.left && postorderTraversalSequence(node.left,sequence);
    node.right && postorderTraversalSequence(node.right,sequence);
    sequence.push(node.val);
}


var postorderTraversal = function(root) {
    const sequence = [];
    root && postorderTraversalSequence(root,sequence);
    return sequence;
};