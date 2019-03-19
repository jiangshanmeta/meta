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
var findSecondMinimumValue = function(root) {
    
    function dfs(node,val){
        // node.val比val大 其子节点上的值都不小于它 不需要向下看了
        if(node.val>val){
            return node.val;
        }
        if(node.left !== null){
            // 当前的不比val大 不代表子节点中没有比val大的
            // 看两个子节点有没有比val大的
            const left = dfs(node.left,val);
            const right = dfs(node.right,val);
            if(left === -1){
                return right;
            }else if(right === -1){
                return left;
            }else{
                // 两个子树都有比val大的 取其中较小的那个
                return Math.min(left,right);
            }
            
        }else{
            // 没有子节点
            return -1;
        }
    }
    
    return dfs(root,root.val)
};