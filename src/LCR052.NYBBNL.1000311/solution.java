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
    public TreeNode increasingBST(TreeNode root) {
        return build(root,null);
    }
    
    private TreeNode build(TreeNode root, TreeNode right){
        if(root == null){
            return right;
        }
        TreeNode left = root.left;
        root.left = null;
        
        root.right = build(root.right,right);
        
        return build(left,root);
    }
}