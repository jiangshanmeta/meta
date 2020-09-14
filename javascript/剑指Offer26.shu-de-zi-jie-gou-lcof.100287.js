/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (!A || !B) {
        return false;
    }
    return isSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function isSame (root1, root2) {
    if (!root1 && !root2) {
        return true;
    }
    if (root1 && root2) {
        return root1.val === root2.val && isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
    }
    if (!root2) {
        return true;
    }
    return false;
}
