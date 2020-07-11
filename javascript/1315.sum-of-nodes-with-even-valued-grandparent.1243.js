/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    return dfs(root,[]);
};

function dfs(root,sequence){
    if(!root){
        return 0;
    }
    let result = 0;
    if(sequence.length>1 && sequence[sequence.length-2] % 2 === 0  ){
        result += root.val;
    }
    sequence.push(root.val);
    result += dfs(root.left,sequence);
    result += dfs(root.right,sequence);
    sequence.pop();
    return result;
}