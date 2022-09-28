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

function findLeaves (root: TreeNode | null): number[][] {
    const result:number[][] = [];
    function dfs (root:TreeNode|null):number {
        if (!root) {
            return -1;
        }
        const left = dfs(root.left);
        const right = dfs(root.right);
        const depth = Math.max(left, right) + 1;
        if (depth === result.length) {
            result[depth] = [];
        }
        result[depth].push(root.val);
        return depth;
    }
    dfs(root);
    return result;
}
