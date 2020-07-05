/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if(!root){
        return root;
    }
    return helper(root).right;
};

function helper(root){
    if(root.left && root.right){
        const leftTail = helper(root.left);
        const leftHead = leftTail.right;
        const rightTail = helper(root.right);
        const rightHead = rightTail.right;
        
        leftTail.right = root;
        root.left = leftTail;
        root.right = rightHead;
        rightHead.left = root;
        rightTail.right = leftHead;
        leftHead.left = rightTail;
        return rightTail;
    }else if(root.left){
        const leftTail = helper(root.left);
        const leftHead = leftTail.right;
        leftTail.right = root;
        root.left = leftTail;
        root.right = leftHead;
        leftHead.left = root;
        return root;
    }else if(root.right){
        const rightTail = helper(root.right);
        const rightHead = rightTail.right;
        root.right = rightHead;
        root.left = rightTail;
        rightHead.left = root;
        rightTail.right = root;
        return rightTail;
    }else{
        root.left = root;
        root.right = root;
        return root;
    }
}