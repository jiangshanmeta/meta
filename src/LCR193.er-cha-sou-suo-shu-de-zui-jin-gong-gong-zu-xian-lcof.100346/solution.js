/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    p = p.val;
    q = q.val;
    if (p > q) {
        const tmp = p;
        p = q;
        q = tmp;
    }

    return helper(root, p, q);
};

function helper (root, p, q) {
    if (!root || root.val === p || root.val === q) {
        return root;
    }
    if (root.val > p && root.val < q) {
        return root;
    } else if (root.val < p) {
        return helper(root.right, p, q);
    } else {
        return helper(root.left, p, q);
    }
}
