/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0){
        return null;
    }
    return helper(preorder,inorder,0,preorder.length-1,0,preorder.length-1)
};

function helper(preorder,inorder,preorderStartIndex,preOrderEndIndex,inorderStartIndex,inorderEndIndex){
    const rootNode = new TreeNode(preorder[preorderStartIndex]);
    // 找到根节点在中序遍历的位置
    const rootNodeIndexInorder = inorder.indexOf(preorder[preorderStartIndex],inorderStartIndex);
    // 有左子树
    if(rootNodeIndexInorder > inorderStartIndex){
        rootNode.left = helper(
            preorder,
            inorder,
            preorderStartIndex+1,
            rootNodeIndexInorder-inorderStartIndex+preorderStartIndex,
            inorderStartIndex,
            rootNodeIndexInorder-1,
        );
    }
    // 有右子树
    if(rootNodeIndexInorder !== inorderEndIndex){
        rootNode.right = helper(
            preorder,
            inorder,
            preOrderEndIndex + rootNodeIndexInorder + 1 - inorderEndIndex,
            preOrderEndIndex,
            rootNodeIndexInorder+1,
            inorderEndIndex,
        );
    }
    
    return rootNode;
}