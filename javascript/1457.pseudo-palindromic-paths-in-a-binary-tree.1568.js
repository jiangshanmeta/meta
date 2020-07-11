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
var pseudoPalindromicPaths  = function(root) {
    return dfs(root,0);
};

function dfs(root,counts){
    if(!root){
        return 0;
    }
    counts ^= (1 << root.val);
    if(root.left || root.right){
        return dfs(root.left,counts)+dfs(root.right,counts);
    }else{
        if( (counts & (counts-1)) === 0 ){
            return 1;
        }else{
            return 0;
        }
    }
}