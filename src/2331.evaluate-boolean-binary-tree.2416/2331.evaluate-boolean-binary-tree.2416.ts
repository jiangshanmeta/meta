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

function evaluateTree (root: TreeNode | null): boolean {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return !!root.val;
    }

    const l = evaluateTree(root.left);
    if (l && root.val === 2) {
        return true;
    }
    if (!l && root.val === 3) {
        return false;
    }

    const r = evaluateTree(root.right);

    if (root.val === 2) {
        return l || r;
    }
    return l && r;
}
