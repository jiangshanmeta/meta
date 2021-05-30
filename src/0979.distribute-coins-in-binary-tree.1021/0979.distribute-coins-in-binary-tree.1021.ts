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

function distributeCoins (root: TreeNode | null): number {
    let result = 0;
    function postOrder (root:TreeNode|null) {
        if (!root) {
            return 0;
        }
        const left = postOrder(root.left);
        const right = postOrder(root.right);
        const rest = left + right + root.val - 1;
        result += Math.abs(rest);
        return rest;
    }
    postOrder(root);

    return result;
}
