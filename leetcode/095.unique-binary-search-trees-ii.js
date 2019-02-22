/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// 分治思想
var generateTrees = function(n) {
    const arr = Array.apply(null,{length:n}).map((item,index)=>index+1);
    
    function divideConquer(arr,startIndex,endIndex){
        if(startIndex>endIndex){
            return [];
        }
        
        let rst = [];
        for(let i=startIndex;i<=endIndex;i++){
            // arr[i] 作为根节点的值
            if(startIndex === endIndex){
                rst.push(new TreeNode(arr[i]));
                continue;
            }
            
            // 划分左右
            const leftNodes = divideConquer(arr,startIndex,i-1);
            const rightNodes = divideConquer(arr,i+1,endIndex);
            const leftLength = leftNodes.length;
            const rightLength = rightNodes.length;
            
            // 左右都有节点 有 leftLength*rightLength种情况
            if(leftLength && rightLength){
                for(let j=0;j<leftNodes.length;j++){
                    for(let k=0;k<rightNodes.length;k++){
                        let node = new TreeNode(arr[i]);
                        node.left = leftNodes[j];
                        node.right = rightNodes[k];
                        rst.push(node);
                    }
                }
                
                continue;
            }
            
            // 最多只有一侧有子节点
            if(!leftLength){
                for(let j=0;j<rightNodes.length;j++){
                    let node = new TreeNode(arr[i]);
                    node.right = rightNodes[j];
                    rst.push(node);
                }
                continue;
            }
            
            if(!rightLength){
                for(let j=0;j<leftNodes.length;j++){
                    let node = new TreeNode(arr[i]);
                    node.left = leftNodes[j];
                    rst.push(node);
                }
                continue;
            }

        }
        
        return rst;
    }
    
    return divideConquer(arr,0,n-1);
};