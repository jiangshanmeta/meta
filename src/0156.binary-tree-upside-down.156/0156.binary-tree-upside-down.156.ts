/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function upsideDownBinaryTree (root: TreeNode | null): TreeNode | null {
    if (!root || !root.left) {
        return root;
    }
    function flip (root:TreeNode, parent:TreeNode, parentRight:TreeNode|null) {
        parent.left = null;
        parent.right = null;
        if (root.left) {
            const newRoot = flip(root.left, root, root.right);
            root.right = parent;
            root.left = parentRight;
            return newRoot;
        } else {
            root.left = parentRight;
            root.right = parent;
            return root;
        }
    }
    return flip(root.left, root, root.right);
}
