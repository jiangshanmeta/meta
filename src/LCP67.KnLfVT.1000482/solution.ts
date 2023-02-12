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

function expandBinaryTree (root: TreeNode | null, dir: 0 | 1| -1 = 0): TreeNode | null {
    if (!root) {
        return root;
    }

    root.left = expandBinaryTree(root.left, -1);
    root.right = expandBinaryTree(root.right, 1);

    if (dir === 0) {
        return root;
    }
    if (dir === 1) {
        const doc = new TreeNode(-1);
        doc.right = root;
        return doc;
    }
    const doc = new TreeNode(-1);
    doc.left = root;
    return doc;
}
