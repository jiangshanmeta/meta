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

function averageOfSubtree (root: TreeNode | null): number {
    let result = 0;
    const postOrder = (root:TreeNode | null):[number, number] => {
        if (!root) {
            return [0, 0, ];
        }

        const [leftSum, leftCount, ] = postOrder(root.left);
        const [rightSum, rightCount, ] = postOrder(root.right);
        const sum = root.val + leftSum + rightSum;
        const count = 1 + leftCount + rightCount;
        if (Math.floor(sum / count) === root.val) {
            result++;
        }
        return [sum, count, ];
    };
    postOrder(root);
    return result;
}
