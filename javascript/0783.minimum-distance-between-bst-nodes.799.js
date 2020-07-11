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

function getMin(node){
    while(node.left){
        node = node.left;
    }
    return node.val;
}

var minDiffInBST = function(root) {
    let preVal = getMin(root);
    
    let diff = Infinity;
    function inOrder(node){
        if(node === null){
            return;
        }
        
        inOrder(node.left);
        
        const val = node.val;
        if(val !== preVal &&  val-preVal<diff){
            diff = val-preVal;
        }
        preVal = val;
        
        inOrder(node.right);
    }
    
    inOrder(root);
    
    return diff;
};