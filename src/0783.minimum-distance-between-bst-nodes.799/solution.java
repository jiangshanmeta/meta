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
    private int last = Integer.MAX_VALUE;
    private int result = Integer.MAX_VALUE;

    public int minDiffInBST(TreeNode root) {
        last = root.val;
        inOrder(root);
        return result;
    }

    private void inOrder(TreeNode node) {
        if (node.left != null) {
            inOrder(node.left);
        }

        if (last < node.val) {
            result = Math.min(result, node.val - last);
        }

        last = node.val;

        if (node.right != null) {
            inOrder(node.right);
        }

    }
}