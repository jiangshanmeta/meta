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
// 递归实现
var preorderTraversal = function(root) {
    const sequence = [];
    root && preorderTraversalSequence(root,sequence);
    return sequence;
};

function preorderTraversalSequence(node,sequence){
    sequence.push(node.val);
    node.left && preorderTraversalSequence(node.left,sequence);
    node.right && preorderTraversalSequence(node.right,sequence);
}
// 非递归实现
var preorderTraversal = function(root) {
    const result = [];
    const stack = [];
    while(root){
        result.push(root.val);
        root.right && stack.push(root.right);
        root = root.left;
    }

    while(stack.length){
        root = stack.pop();
        result.push(root.val);
        root.right && stack.push(root.right);
        root = root.left;
        while(root){
            result.push(root.val);
            root.right && stack.push(root.right);
            root = root.left;
        }
    }

    return result;
};