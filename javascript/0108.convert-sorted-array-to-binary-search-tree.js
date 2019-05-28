/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return divideConquer(nums,0,nums.length-1);
};

function divideConquer(nums,start,end){
    if(end<start){
        return null;
    }
    
    const mid = Math.floor((start+end)/2);
    
    const node = new TreeNode(nums[mid]);
    if(mid !== start){
        node.left = divideConquer(nums,start,mid-1);
    }
    
    node.right = divideConquer(nums,mid+1,end);
    
    return node;
}