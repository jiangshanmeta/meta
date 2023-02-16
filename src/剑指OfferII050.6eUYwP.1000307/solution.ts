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

function pathSum (root: TreeNode | null, targetSum: number): number {
    if (!root) {
        return 0;
    }
    let result = 0;
    const map = new Map<number, number>();
    map.set(0, 1);

    const dfs = (root:TreeNode, sum:number) => {
        sum += root.val;
        if (map.has(sum - targetSum)) {
            result += map.get(sum - targetSum)!;
        }
        const count = map.has(sum) ? map.get(sum)! + 1 : 1;
        map.set(sum, count);
        if (root.left) {
            dfs(root.left, sum);
        }
        if (root.right) {
            dfs(root.right, sum);
        }
        map.set(sum, count - 1);
    };

    dfs(root, 0);

    return result;
}
