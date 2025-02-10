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
        return increase(root,null);
    }

    private TreeNode increase(TreeNode root, TreeNode addon){
        if(root == null){
            return addon;
        }
        root.right = increase(root.right,addon);

        TreeNode left = root.left;
        if(left == null){
            return root;
        }
        root.left = null;
        return increase(left,root);
    }
}