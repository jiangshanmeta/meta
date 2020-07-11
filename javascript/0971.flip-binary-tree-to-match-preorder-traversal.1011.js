/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */

// 深度优先/先序遍历
var flipMatchVoyage = function(root, voyage) {
    let result = [];
    let index = 0;
    
    function dfs(node){
        if(node === null){
            return;
        }
        // 匹配不上
        if(node.val !== voyage[index++]){
            result = [-1];
            return;
        }
        // 如果有left，且left不匹配
        // 尝试flip 其实只有在有right的情况下flip才有意义
        if(node.left !== null && node.left.val !== voyage[index]){
            result.push(node.val);
            node.right && dfs(node.right);
            dfs(node.left);
        }else{
            node.left && dfs(node.left);
            node.right && dfs(node.right);
        }
    }
    dfs(root);
    return result;
};