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

function findClosestLeaf (root: TreeNode | null, k: number): number {
    if (!root) {
        return 0;
    }
    const path:TreeNode[] = [];
    function findPath (root:TreeNode) {
        path.push(root);
        if (root.val === k) {
            return true;
        }
        if (root.left) {
            const rstL = findPath(root.left);
            if (rstL) {
                return true;
            }
        }
        if (root.right) {
            const rstR = findPath(root.right);
            if (rstR) {
                return true;
            }
        }
        path.pop();
        return false;
    }
    findPath(root);
    let result = 0;
    let minDis = Infinity;

    function findLeaf (root:TreeNode|null, dis:number) {
        if (!root || dis >= minDis) {
            return;
        }
        if (!root.left && !root.right) {
            result = root.val;
            minDis = dis;
            return;
        }
        dis++;
        root.left && findLeaf(root.left, dis);
        root.right && findLeaf(root.right, dis);
    }
    findLeaf(path[path.length - 1], 0);
    for (let i = path.length - 2; i > -1; i--) {
        if (path[i + 1] === path[i].left) {
            findLeaf(path[i].right, path.length - i);
        } else {
            findLeaf(path[i].left, path.length - i);
        }
    }

    return result;
}
