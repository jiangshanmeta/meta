/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (p.val < q.val) {
            return search(root, p, q);
        }
        return search(root, q, p);
    }

    public TreeNode search(TreeNode root, TreeNode p, TreeNode q) {
        if (root.val == p.val || root.val == q.val) {
            return root;
        }
        if (root.val > p.val && root.val < q.val) {
            return root;
        }
        if (root.val > q.val) {
            return search(root.left, p, q);
        }
        return search(root.right, p, q);
    }

}