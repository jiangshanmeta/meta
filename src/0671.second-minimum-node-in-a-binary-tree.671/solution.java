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
    public int findSecondMinimumValue(TreeNode root) {
        int left = min(root.left, root.val);
        int right = min(root.right,root.val);

        if(left == root.val && right == root.val){
            return -1;
        }
        if(left == root.val){
            return right;
        }
        if(right == root.val){
            return left;
        }
        return Math.min(left,right);
    }

    private int min(TreeNode root, int val){
        if(root == null){
            return val;
        }
        if(root.val>val){
            return root.val;
        }

        if(root.left == null){
            return val;
        }
        int left = min(root.left,val);
        int right = min(root.right,val);
        if(root.val == left){
            return right;
        }
        if(root.val == right){
            return left;
        }
        return Math.min(left,right);
    }

}