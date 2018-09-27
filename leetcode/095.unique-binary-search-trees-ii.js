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
var generateTrees = function(n) {
    const arr = Array.apply(null,{length:n}).map((item,index)=>index+1);
    
    function dfs(arr,startIndex,endIndex){
        if(startIndex>endIndex){
            return [];
        }
        
        let rst = [];
        for(let i=startIndex;i<=endIndex;i++){
            if(startIndex === endIndex){
                rst.push(new TreeNode(arr[i]));
                continue;
            }
            
            
            const leftNodes = dfs(arr,startIndex,i-1);
            const rightNodes = dfs(arr,i+1,endIndex);
            const leftLength = leftNodes.length;
            const rightLength = rightNodes.length;
            
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
    
    return dfs(arr,0,n-1);
};