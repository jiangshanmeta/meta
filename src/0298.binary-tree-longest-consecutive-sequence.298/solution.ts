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

function longestConsecutive (root: TreeNode | null): number {
    let result = 0;
    function dfs (root:TreeNode, parentVal:number, count:number) {
        if (root.val === parentVal + 1) {
            count++;
        } else {
            count = 1;
        }
        result = Math.max(result, count);
        root.left && dfs(root.left, root.val, count);
        root.right && dfs(root.right, root.val, count);
    }
    root && dfs(root, -Infinity, 0);
    return result;
}
