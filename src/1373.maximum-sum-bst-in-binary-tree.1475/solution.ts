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

function maxSumBST (root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let result = 0;
    function postOrder (root:TreeNode):[boolean, number, number, number] {
        if (root.left && root.right) {
            const [lIs, lMin, lMax, lSum, ] = postOrder(root.left);

            const [rIs, rMin, rMax, rSum, ] = postOrder(root.right);
            if (!lIs || lMax >= root.val) {
                return [false, 0, 0, 0, ];
            }

            if (!rIs || rMin <= root.val) {
                return [false, 0, 0, 0, ];
            }
            const sum = lSum + rSum + root.val;
            result = Math.max(result, sum);
            return [true, lMin, rMax, sum, ];
        } else if (root.left) {
            const [lIs, lMin, lMax, lSum, ] = postOrder(root.left);
            if (!lIs || lMax >= root.val) {
                return [false, 0, 0, 0, ];
            }
            const sum = lSum + root.val;
            result = Math.max(result, sum);
            return [true, lMin, root.val, sum, ];
        } else if (root.right) {
            const [rIs, rMin, rMax, rSum, ] = postOrder(root.right);
            if (!rIs || rMin <= root.val) {
                return [false, 0, 0, 0, ];
            }
            const sum = rSum + root.val;
            result = Math.max(result, sum);
            return [true, root.val, rMax, sum, ];
        } else {
            result = Math.max(result, root.val);
            return [true, root.val, root.val, root.val, ];
        }
    }
    postOrder(root);
    return result;
}
