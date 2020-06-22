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
var pathSum = function(root, sum) {
    const result = [];
    dfs(root,sum,[],result);
    return result;
};

function dfs(root,rest,sequence,result){
    if(!root){
        return;
    }
    rest -= root.val;
    sequence.push(root.val);
    if(!root.left && !root.right){
        if(rest === 0){
            result.push(sequence.slice(0));
        }
        sequence.pop();
        return;
    }
    dfs(root.left,rest,sequence,result);
    dfs(root.right,rest,sequence,result);
    sequence.pop();
}