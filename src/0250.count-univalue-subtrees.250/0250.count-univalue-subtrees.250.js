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
var countUnivalSubtrees = function (root) {
    let result = 0;
    function postOrder (root) {
        if (root.left && root.right) {
            const [leftSame, leftVal, ] = postOrder(root.left);
            const [rightSame, rightVal, ] = postOrder(root.right);
            const allSame = leftSame && rightSame && root.val === leftVal && root.val === rightVal;
            if (allSame) {
                result++;
                return [true, root.val, ];
            } else {
                return [false, 0, ];
            }
        } else if (root.left) {
            const [leftSame, leftVal, ] = postOrder(root.left);
            const allSame = leftSame && root.val === leftVal;
            if (allSame) {
                result++;
                return [true, root.val, ];
            } else {
                return [false, 0, ];
            }
        } else if (root.right) {
            const [rightSame, rightVal, ] = postOrder(root.right);
            const allSame = rightSame && root.val === rightVal;
            if (allSame) {
                result++;
                return [true, root.val, ];
            } else {
                return [false, 0, ];
            }
        } else {
            result++;
            return [true, root.val, ];
        }
    }
    root && postOrder(root);
    return result;
};
