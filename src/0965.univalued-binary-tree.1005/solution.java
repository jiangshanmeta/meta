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
    public boolean isUnivalTree(TreeNode root) {
        if (root == null) {
            return true;
        }
        return isSameValue(root, root.val);
    }

    private boolean isSameValue(TreeNode root, int val) {
        if (root == null) {
            return true;
        }
        return root.val == val && isSameValue(root.left, val) && isSameValue(root.right, val);
    }
}