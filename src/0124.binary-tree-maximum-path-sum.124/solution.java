/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int result = Integer.MIN_VALUE;
    public int maxPathSum(TreeNode root) {
        postOrder(root);
        
        return result;
    }

    private int postOrder(TreeNode root){
        int left = root.left == null ? Integer.MIN_VALUE : postOrder(root.left);
        int right = root.right == null ? Integer.MIN_VALUE: postOrder(root.right);
        
        result = Math.max(
                result,
                root.val + Math.max(0,left)+Math.max(0,right)
        );
        
        return Math.max(Math.max(left,right),0)+root.val;
    }
}