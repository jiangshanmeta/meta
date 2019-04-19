/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    function helper(pre,post,preStartIndex,preEndIndex,postStartIndex,postEndIndex){
        const rootNode = new TreeNode(pre[preStartIndex]);
        if(preStartIndex === preEndIndex){
            return rootNode
        }
        // 如果有且只有一颗子树 则 pre[preStartIndex+1] 应该和 post[preEndIndex-1] 一样
        // 否则就是两个根节点
        // 有左右两个子树         
        if(pre[preStartIndex+1] !== post[postEndIndex-1]){
            
            let lastIndex;
            for(let i=preStartIndex+1;i<=preEndIndex;i++){
                if(pre[i] === post[postEndIndex-1]){
                    lastIndex = i;
                    break;
                }
            }
            
            rootNode.left = helper(
                pre,
                post,
                preStartIndex+1,
                lastIndex-1,
                postStartIndex,
                postStartIndex+lastIndex-preStartIndex-2,
            );
            
            rootNode.right = helper(
                pre,
                post,
                lastIndex,
                preEndIndex,
                postEndIndex-preEndIndex+lastIndex-1,
                postEndIndex-1,
            );
            
            
        }else{
            // 统一按照只有左子树处理
            rootNode.left = helper(
                pre,
                post,
                preStartIndex+1,
                preEndIndex,
                postStartIndex,
                postEndIndex-1,
            );
            
            
        }
        
        
        return rootNode;
    }
    
    return helper(pre,post,0,pre.length-1,0,pre.length-1);
};