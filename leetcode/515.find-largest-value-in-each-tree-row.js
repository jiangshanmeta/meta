/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 找到每一层的最大值
// 层序遍历的实现很容易想到
// 下面给出的实现是基于dfs的 更准确一点是先序遍历

var largestValues = function(root) {
    const sequence = [];
    function dfs(node,height,sequence){
        if(!node){
            return;
        }
        
        if(height<sequence.length){
            if(node.val>sequence[height]){
                sequence[height] = node.val;
            }
        }else{
            sequence.push(node.val);
        }
        
        dfs(node.left,height+1,sequence);
        dfs(node.right,height+1,sequence);
    }
    
    dfs(root,0,sequence);
    return sequence;
};