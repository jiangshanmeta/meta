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

function treeQueries (root: TreeNode | null, queries: number[]): number[] {
    if (!root) {
        return [];
    }
    const depthMap = new Map<number, number>();
    const findDepth = (node:TreeNode):number => {
        let depth = 0;
        if (node.left && node.right) {
            const l = findDepth(node.left);
            const r = findDepth(node.right);
            depth = Math.max(l, r) + 1;
        } else if (node.left) {
            depth = findDepth(node.left) + 1;
        } else if (node.right) {
            depth = findDepth(node.right) + 1;
        }
        depthMap.set(node.val, depth);
        return depth;
    };
    findDepth(root);

    const removedMap = new Map<number, number>();
    const findRemovedDepth = (node:TreeNode, current:number, max:number) => {
        removedMap.set(node.val, max);
        current++;
        if (node.left && node.right) {
            findRemovedDepth(node.left, current, Math.max(max, current + depthMap.get(node.right.val)));
            findRemovedDepth(node.right, current, Math.max(max, current + depthMap.get(node.left.val)));
        } else if (node.left) {
            findRemovedDepth(node.left, current, Math.max(max, current - 1));
        } else if (node.right) {
            findRemovedDepth(node.right, current, Math.max(max, current - 1));
        }
    };
    findRemovedDepth(root, 0, 0);

    return queries.map((query) => removedMap.get(query));
}
