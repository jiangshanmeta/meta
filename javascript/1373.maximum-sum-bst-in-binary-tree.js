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
var maxSumBST = function(root) {
    const rst = postOrder(root)[0];
    return rst>0?rst:0;
};

function postOrder(root){
    if(!root){
        return [-Infinity,true,-Infinity,Infinity,0];
    }
    if(!root.left && !root.right){
        return [root.val,true,root.val,root.val,root.val];
    }
    let isBST = true;
    let result = -Infinity;
    let min = root.val;
    let max = root.val;
    let cur = root.val;
    if(root.left){
        const [leftRst,leftIsBST,leftMin,leftMax,leftSum] = postOrder(root.left);
        result = Math.max(result,leftRst);
        if(!leftIsBST || root.val<=leftMax){
            isBST = false;
        }else{
            cur += leftSum;
        }
        min = leftMin;
    }
    if(root.right){
        const [rightRst,rightIsBST,rightMin,rightMax,rightSum] = postOrder(root.right);
        result = Math.max(result,rightRst);
        if(!rightIsBST || root.val>=rightMin){
            isBST = false;
        }else{
            cur += rightSum;
        }
        max = rightMax;
    }
    return [Math.max(result,isBST?cur:-Infinity),isBST,min,max,cur];
}