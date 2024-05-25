/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    public int sumRootToLeaf(TreeNode root) {
        if (root == null) {
            return 0;
        }
        return calc(root, 0);
    }

    private int calc(TreeNode root, int prev) {
        prev = prev * 2 + root.val;

        if (root.left != null && root.right != null) {
            return calc(root.left, prev) + calc(root.right, prev);
        }
        if (root.left != null) {
            return calc(root.left, prev);
        }
        if (root.right != null) {
            return calc(root.right, prev);
        }

        return prev;
    }

}