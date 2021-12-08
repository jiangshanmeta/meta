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

function getSmallest (root:TreeNode) {
    while (root.left) {
        root = root.left;
    }
    return root;
}

function inorderSuccessor (root: TreeNode | null, p: TreeNode | null): TreeNode | null {
    if (!root || !p) {
        return null;
    }
    if (p.right) {
        return getSmallest(p.right);
    }
    const path = [];
    while (root !== p) {
        path.push(root);
        if (root.val > p.val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    path.push(p);
    for (let i = path.length - 2; i > -1; i--) {
        if (path[i + 1] === path[i].left) {
            return path[i];
        }
    }
    return null;
}
