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

function numColor (root: TreeNode | null): number {
    const set = new Set<number>();
    const dfs = (node:TreeNode) => {
        set.add(node.val);
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    };
    root && dfs(root);

    return set.size;
}
