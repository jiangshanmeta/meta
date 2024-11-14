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

function maxPathSum (root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let result = -Infinity;
    const dfs = (root:TreeNode | null):number => {
        if (!root) {
            return 0;
        }
        const l = dfs(root.left);
        const r = dfs(root.right);
        result = Math.max(result, l + r + root.val);

        return Math.max(0, root.val + Math.max(l, r));
    };

    dfs(root);

    return result;
}
