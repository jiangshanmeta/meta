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
var increasingBST = function (root) {
    return shape(root)[0];
};

function shape (root) {
    if (!root) {
        return [null, null, ];
    }
    const [rS, rE, ] = shape(root.right);
    root.right = rS;
    if (!root.left) {
        return [root, rE || root, ];
    }
    const [lS, lE, ] = shape(root.left);
    lE.right = root;
    root.left = null;

    return [lS, rE || root, ];
}
