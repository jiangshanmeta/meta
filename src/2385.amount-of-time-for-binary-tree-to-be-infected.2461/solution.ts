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

function amountOfTime (root: TreeNode | null, start: number): number {
    if (!root) {
        return 0;
    }
    const findPath = (node:TreeNode, paths:TreeNode[]) => {
        paths.push(node);
        if (node.val === start) {
            return true;
        }
        if (node.left) {
            const rst = findPath(node.left, paths);
            if (rst) {
                return true;
            }
        }
        if (node.right) {
            const rst = findPath(node.right, paths);
            if (rst) {
                return true;
            }
        }
        paths.pop();

        return false;
    };
    const paths:TreeNode[] = [];
    findPath(root, paths);

    let result = 0;
    const set = new Set([start, ]);
    const bfs = (nodes:TreeNode[]) => {
        const nNodes:TreeNode[] = [];
        if (paths.length) {
            const n = paths.pop();
            set.add(n.val);
            nNodes.push(n);
        }
        for (const n of nodes) {
            if (n.left && !set.has(n.left.val)) {
                nNodes.push(n.left);
                set.add(n.left.val);
            }
            if (n.right && !set.has(n.right.val)) {
                nNodes.push(n.right);
                set.add(n.right.val);
            }
        }

        if (nNodes.length) {
            result++;
            bfs(nNodes);
        }
    };
    bfs([paths.pop(), ]);

    return result;
}
