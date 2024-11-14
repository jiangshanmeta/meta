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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let sum = 0;
    const getSum = (root) => {
        sum += root.val;
        root.left && getSum(root.left);
        root.right && getSum(root.right);
    };
    root && getSum(root);
    const update = (root) => {
        root.left && update(root.left);
        const val = root.val;
        root.val = sum;
        sum -= val;
        root.right && update(root.right);
    };
    root && update(root);
    return root;
};
