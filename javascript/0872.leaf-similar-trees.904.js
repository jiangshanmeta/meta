/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// DFS找到所有叶节点
var leafSimilar = function(root1, root2) {
    function dfs(node,sequence){
        if(node.left === null && node.right === null){
            return sequence.push(node.val);
        }
        node.left && dfs(node.left,sequence);
        node.right && dfs(node.right,sequence);
    }
    
    const sequence1 = [];
    root1 && dfs(root1,sequence1);
    
    const sequence2 = [];
    root2 && dfs(root2,sequence2);
    
    if(sequence1.length !== sequence2.length){
        return false;
    }
    
    for(let i=0;i<sequence1.length;i++){
        if(sequence1[i] !== sequence2[i]){
            return false;
        }
    }
    return true;
};