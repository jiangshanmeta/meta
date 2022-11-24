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

function minimumOperations (root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let result = 0;
    let ns = [root, ];
    while (ns.length) {
        const vals:number[] = [];
        const nns:TreeNode[] = [];
        for (const n of ns) {
            vals.push(n.val);
            if (n.left) {
                nns.push(n.left);
            }
            if (n.right) {
                nns.push(n.right);
            }
        }
        const valIndexMap = vals.reduce((map, val, index) => {
            map.set(val, index);
            return map;
        }, new Map<number, number>());
        const expected = [...vals, ].sort((a, b) => a - b);
        for (let i = 0; i < vals.length; i++) {
            if (vals[i] !== expected[i]) {
                result++;
                const index = valIndexMap.get(expected[i]);
                vals[index] = vals[i];
                valIndexMap.set(vals[i], index);
            }
        }

        ns = nns;
    }

    return result;
}
