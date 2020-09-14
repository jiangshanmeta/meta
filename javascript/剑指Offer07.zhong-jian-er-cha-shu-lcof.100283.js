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
var buildTree = function (preorder, inorder, preStartIndex = 0, preEndIndex = preorder.length - 1, inStartIndex = 0, inEndIndex = inorder.length - 1) {
    if (!preorder.length) {
        return null;
    }

    const rootVal = preorder[preStartIndex];

    const rootNode = new TreeNode(rootVal);
    if (preStartIndex === preEndIndex) {
        return rootNode;
    }

    let rootIndexInOrder;
    for (let i = inStartIndex; i <= inEndIndex; i++) {
        if (inorder[i] === rootVal) {
            rootIndexInOrder = i;
            break;
        }
    }

    if (rootIndexInOrder !== inStartIndex) {
        rootNode.left = buildTree(
            preorder,
            inorder,
            preStartIndex + 1,
            preStartIndex + rootIndexInOrder - inStartIndex,
            inStartIndex,
            rootIndexInOrder - 1
        );
    }

    if (rootIndexInOrder !== inEndIndex) {
        rootNode.right = buildTree(
            preorder,
            inorder,
            preEndIndex - (inEndIndex - rootIndexInOrder - 1),
            preEndIndex,
            rootIndexInOrder + 1,
            inEndIndex
        );
    }

    return rootNode;
};
