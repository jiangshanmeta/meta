// 先序遍历而已
// 递归实现没难度
// 改天实现非递归版
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
function preorderTraversalSequence(node,sequence){
    sequence.push(node.val);
    node.left && preorderTraversalSequence(node.left,sequence);
    node.right && preorderTraversalSequence(node.right,sequence);
}


var preorderTraversal = function(root) {
    const sequence = [];
    root && preorderTraversalSequence(root,sequence);
    return sequence;
};