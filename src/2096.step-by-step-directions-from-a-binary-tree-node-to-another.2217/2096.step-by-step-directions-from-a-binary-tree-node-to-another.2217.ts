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

function getDirections (root: TreeNode | null, startValue: number, destValue: number): string {
    if (!root) {
        return '';
    }
    const pathS = [];
    const pathD = [];
    findPath(root, pathS, startValue);
    findPath(root, pathD, destValue);

    const result = [];
    let index = pathS.length - 1;
    while (index >= pathD.length) {
        index--;
        result.push('U');
    }
    while (pathS[index] !== pathD[index]) {
        index--;
        result.push('U');
    }
    while (index < pathD.length - 1) {
        if (pathD[index + 1] === pathD[index].right) {
            result.push('R');
        } else {
            result.push('L');
        }
        index++;
    }
    return result.join('');
}

function findPath (root:TreeNode, paths:TreeNode[], target:number) {
    paths.push(root);
    if (root.val === target) {
        return true;
    }

    if (root.left) {
        const rst = findPath(root.left, paths, target);
        if (rst) {
            return true;
        }
    }
    if (root.right) {
        const rst = findPath(root.right, paths, target);
        if (rst) {
            return true;
        }
    }
    paths.pop();
    return false;
}
