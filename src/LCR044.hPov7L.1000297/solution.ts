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

function largestValues (root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }
    const result:number[] = [];
    let nodes = [root, ];
    while (nodes.length) {
        const nNodes:TreeNode[] = [];
        let max = -Infinity;
        for (const node of nodes) {
            max = Math.max(max, node.val);
            if (node.left) {
                nNodes.push(node.left);
            }
            if (node.right) {
                nNodes.push(node.right);
            }
        }
        nodes = nNodes;
        result.push(max);
    }
    return result;
}
