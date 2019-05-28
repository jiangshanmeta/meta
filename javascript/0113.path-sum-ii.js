/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// DFS 有点回溯类问题的味道
var pathSum = function(root, sum) {
    if(!root){
        return [];
    }
    const sequences = [];
    function helper(node,arr,cur){
        // leaf node         
        if(!node.left && !node.right){
            if(node.val + cur === sum){
                arr.push(node.val);
                sequences.push(arr);
            }
            return;
        }
        if(!node.left){
            arr.push(node.val);
            return helper(node.right,arr,cur+node.val);
        }
        if(!node.right){
            arr.push(node.val);
            return helper(node.left,arr,cur+node.val);
        }
        helper(node.left,arr.concat(node.val),cur+node.val);
        helper(node.right,arr.concat(node.val),cur+node.val);

    }
    helper(root,[],0);
    return sequences;
};