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
var longestConsecutive = function (root) {
    if (!root) {
        return 0;
    }
    return helper(root, root.val)[0];
};

function helper (root, lastVal) {
    if (!root) {
        return [0, 0, 0, ];
    }
    const [leftRst, leftIncrease, leftDecrease, ] = helper(root.left, root.val);
    const [rightRst, rightIncrease, rightDecrease, ] = helper(root.right, root.val);
    return [
        Math.max(
            leftRst,
            rightRst,
            Math.max(leftIncrease + rightDecrease, leftDecrease + rightIncrease) + 1
        ),
        root.val === lastVal + 1 ? Math.max(leftIncrease, rightIncrease) + 1 : 0,
        root.val === lastVal - 1 ? Math.max(leftDecrease, rightDecrease) + 1 : 0,
    ];
}
