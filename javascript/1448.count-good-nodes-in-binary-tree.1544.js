/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    return dfs(root,-Infinity);
};

function dfs(root,maxVal){
    if(!root){
        return 0;
    }
    let result = 0;
    if(root.val>=maxVal){
        result++;
    }
    maxVal = Math.max(root.val,maxVal);
    
    return result+dfs(root.left,maxVal)+dfs(root.right,maxVal);
}