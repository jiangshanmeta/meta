/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    function buildTree(startIndex,endIndex){
        if(endIndex<startIndex){
            return null;
        }
        if(startIndex === endIndex){
            return new TreeNode(preorder[startIndex]);
        }
        const root = new TreeNode(preorder[startIndex]);
        
        // 找到满足大于root值的第一个索引
        let low = startIndex+1;
        let high = endIndex;
        let index = endIndex+1;
        
        while(low<=high){
            const mid = (low+high) >> 1;
            if(preorder[mid]>preorder[startIndex]){
                index = Math.min(index,mid);
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
        
        root.left = buildTree(startIndex+1,index-1);
        root.right = buildTree(index,endIndex);
        
        return root;
    }
    return buildTree(0,preorder.length-1);
};