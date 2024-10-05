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
    private int result = 0;
    private int low = 0;
    private int high = 0;

    private void calc(TreeNode root) {
        if (root == null) {
            return;
        }
        if (root.val > high) {
            calc(root.left);
        } else if (root.val < low) {
            calc(root.right);
        } else {
            result += root.val;
            calc(root.left);
            calc(root.right);
        }

    }

    public int rangeSumBST(TreeNode root, int low, int high) {
        this.low = low;
        this.high = high;
        calc(root);
        return result;
    }
}