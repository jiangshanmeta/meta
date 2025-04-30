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
    private int cnt = 0;
    public int findTargetNode(TreeNode root, int cnt) {
        this.cnt = cnt;
        return travel(root).val;
    }

    private TreeNode travel(TreeNode root){
        if(root == null){
            return null;
        }
        
        TreeNode right = travel(root.right);
        if(right != null){
            return right;
        }
        this.cnt--;
        if(this.cnt == 0){
            return root;
        }

        return travel(root.left);
    }

}