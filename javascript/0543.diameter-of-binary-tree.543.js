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
// 后序遍历
var diameterOfBinaryTree = function(root) {
    if(!root || (!root.left && !root.right)){
        return 0;
    }
    
    let max = 1;
    // 返回node到它下面的叶节点的距离的最大值
    function dfs(node){
        if(node === null){
            return 0;
        }
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        const curSum = right + left + 1;
        if(curSum>max){
            max = curSum;
        }
        return Math.max(right,left) + 1;
    }
    
    dfs(root);
    return max - 1;
};