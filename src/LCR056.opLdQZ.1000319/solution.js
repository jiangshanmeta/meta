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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    const sequence = [];
    const inOrder = (root) => {
        root.left && inOrder(root.left);
        sequence.push(root.val);
        root.right && inOrder(root.right);
    };
    inOrder(root);
    let left = 0;
    let right = sequence.length - 1;
    while (left < right) {
        const sum = sequence[left] + sequence[right];
        if (sum > k) {
            right--;
        } else if (sum < k) {
            left++;
        } else {
            return true;
        }
    }
    return false;
};
