/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root){
        return root;
    }
    
    // 要删的节点在右子树上
    if(root.val<key){
        root.right = deleteNode(root.right,key);
        return root;
    }
    
    // 要删的节点在左子树上
    if(root.val>key){
        root.left = deleteNode(root.left,key);
        return root;
    }
    
    
    // 该节点就是要删除的节点

    // 只有左子树或者右子树
    if(!root.left){
        const right = root.right;
        root.right = null;
        return right;
    }
    
    if(!root.right){
        const left = root.left;
        root.left = null;
        return left;
    }
    
    // 左右两子树都有 根节点的值更新为左子树最小值 同时删除左子树的最小节点
    let rightMin = root.right;
    while(rightMin.left){
        rightMin = rightMin.left;
    }
    root.val = rightMin.val;
    root.right = deleteNode(root.right,rightMin.val);
    return root;
    
    
};