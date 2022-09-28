/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function (root) {
    let result = 0;
    function postOrder (root) {
        if (root.left && root.right) {
            const [leftIs, leftMin, leftMax, leftCount, ] = postOrder(root.left);
            const [rightIs, rightMin, rightMax, rightCount, ] = postOrder(root.right);
            if (!leftIs || !rightIs || root.val <= leftMax || root.val >= rightMin) {
                return [false, 0, 0, 0, ];
            }
            const count = leftCount + rightCount + 1;
            result = Math.max(result, count);
            return [true, leftMin, rightMax, count, ];
        } else if (root.left) {
            const [leftIs, leftMin, leftMax, leftCount, ] = postOrder(root.left);
            if (!leftIs || root.val <= leftMax) {
                return [false, 0, 0, 0, ];
            }
            const count = leftCount + 1;
            result = Math.max(result, count);
            return [true, leftMin, root.val, count, ];
        } else if (root.right) {
            const [rightIs, rightMin, rightMax, rightCount, ] = postOrder(root.right);
            if (!rightIs || root.val >= rightMin) {
                return [false, 0, 0, 0, ];
            }
            const count = rightCount + 1;
            result = Math.max(result, count);
            return [true, root.val, rightMax, count, ];
        } else {
            result = Math.max(result, 1);
            return [true, root.val, root.val, 1, ];
        }
    }
    root && postOrder(root);
    return result;
};
