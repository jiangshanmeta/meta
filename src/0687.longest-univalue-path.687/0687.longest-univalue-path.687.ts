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

function longestUnivaluePath (root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let result = 1;
    function postOrder (root:TreeNode|null):[number, number] {
        if (!root) {
            return [0, 0, ];
        }
        const [leftVal, leftCount, ] = postOrder(root.left);
        const [rightVal, rightCount, ] = postOrder(root.right);
        let currentResult = 1;
        if (root.val === leftVal) {
            currentResult += leftCount;
        }
        if (root.val === rightVal) {
            currentResult += rightCount;
        }

        result = Math.max(result, currentResult);
        let count = 0;
        if (root.val === leftVal) {
            count = leftCount;
        }
        if (root.val === rightVal) {
            count = Math.max(count, rightCount);
        }

        return [root.val, count + 1, ];
    }
    postOrder(root);

    return result - 1;
}
