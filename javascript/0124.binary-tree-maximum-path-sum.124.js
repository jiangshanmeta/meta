/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 后序遍历
var maxPathSum = function (root) {
    if (!root) {
        return 0;
    }
    let max = -Infinity;

    function divideConquer (node) {
        if (!node.left && !node.right) {
            if (node.val > max) {
                max = node.val;
            }
            return node.val;
        }

        const leftPath = (node.left && divideConquer(node.left)) || 0;
        const rightPath = (node.right && divideConquer(node.right)) || 0;

        let curSum = node.val;

        if (node.val + leftPath > curSum) {
            curSum = node.val + leftPath;
        }

        if (node.val + rightPath > curSum) {
            curSum = node.val + rightPath;
        }

        const allSum = node.val + rightPath + leftPath;
        if (allSum > max) {
            max = allSum;
        }

        if (curSum > max) {
            max = curSum;
        }
        return curSum;
    }
    divideConquer(root);
    return max;
};
