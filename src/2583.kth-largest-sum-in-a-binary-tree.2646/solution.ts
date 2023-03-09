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

function kthLargestLevelSum (root: TreeNode | null, k: number): number {
    if (!root) {
        return 0;
    }
    let nodes = [root, ];
    const sums = [];
    while (nodes.length) {
        let sum = 0;
        const nn:TreeNode[] = [];
        for (const n of nodes) {
            sum += n.val;
            if (n.left) {
                nn.push(n.left);
            }
            if (n.right) {
                nn.push(n.right);
            }
        }
        sums.push(sum);
        nodes = nn;
    }
    if (sums.length < k) {
        return -1;
    }
    sums.sort((a, b) => b - a);
    return sums[k - 1];
}
