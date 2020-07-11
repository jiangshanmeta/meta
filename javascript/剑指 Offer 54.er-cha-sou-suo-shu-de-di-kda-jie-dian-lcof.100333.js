/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    const sequence = [];
    inOrder(root,sequence);
    return sequence[sequence.length-k];
};

function inOrder(root,result){
    if(!root){
        return;
    }
    inOrder(root.left,result);
    result.push(root.val);
    inOrder(root.right,result);
}