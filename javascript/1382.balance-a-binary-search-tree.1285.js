/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    const list = [];
    inOrder(root,list);
    
    return buildTree(list,0,list.length-1);
};

function inOrder(root,result){
    if(!root){
        return;
    }
    inOrder(root.left,result);
    result.push(root);
    inOrder(root.right,result);
}

function buildTree(list,start,end){
    if(start>end){
        return null;
    }
    const mid = (start+end) >>> 1;
    const root = list[mid];
    root.left = buildTree(list,start,mid-1);
    root.right = buildTree(list,mid+1,end);
    return root;
}