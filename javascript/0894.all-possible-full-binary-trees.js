/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
// 基本思路是分治
const tools = {
    1:[new TreeNode(0)]
};

function divideConquer(n){
    if(tools[n] !== undefined){
        return tools[n];
    }
    
    let half = Math.ceil(n/2);
    let rst = [];
    for(let i=1;i<half;i+=2){
        // i个节点构成子树 n-1-i个节点构成另一棵子树
        let toolLess = divideConquer(i);
        let toolMore = divideConquer(n-i-1);
        
        for(let index1=0;index1<toolLess.length;index1++){
            for(let index2=0;index2<toolMore.length;index2++){
                let root = new TreeNode(0);
                root.left = toolLess[index1];
                root.right = toolMore[index2];
                rst.push(root);
                
                // 左右互换
                if(i !== n-i-1){
                    root = new TreeNode(0);
                    root.right = toolLess[index1];
                    root.left = toolMore[index2];
                    rst.push(root);
                }
                
                
            }
        }
    }
    
    tools[n] = rst;
    return rst;
}



var allPossibleFBT = function(N) {
    return divideConquer(N);
};