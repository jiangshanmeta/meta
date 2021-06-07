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

function findDistance (root: TreeNode | null, p: number, q: number): number {
    if (!root) {
        return 0;
    }
    const path1:TreeNode[] = [];
    const path2:TreeNode[] = [];
    findPath(root, p, path1);
    findPath(root, q, path2);

    for (let i = 0; i < Math.min(path1.length, path2.length); i++) {
        if (path1[i] !== path2[i]) {
            return path1.length - i + path2.length - i;
        }
    }
    return Math.abs(path1.length - path2.length);
}

function findPath (root:TreeNode, target:number, path:TreeNode[]):boolean {
    path.push(root);
    if (root.val === target) {
        return true;
    }
    if (root.left) {
        const l = findPath(root.left, target, path);
        if (l) {
            return true;
        }
    }
    if (root.right) {
        const r = findPath(root.right, target, path);
        if (r) {
            return true;
        }
    }
    path.pop();

    return false;
}
