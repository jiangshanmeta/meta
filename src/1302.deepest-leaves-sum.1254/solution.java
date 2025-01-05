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
    public int deepestLeavesSum(TreeNode root) {
        int maxDepth = getMaxDepth(root);
        
        return calc(root,maxDepth);
    }
    
    private int getMaxDepth(TreeNode root){
        if(root == null){
            return 0;
        }
        
        return Math.max(getMaxDepth(root.left),getMaxDepth(root.right))+1;
    }
    
    private int calc(TreeNode node,int depth){
        if(node == null){
            return 0;
        }
        if(depth == 1){
            return node.val;
        }
        
        return calc(node.left,depth-1)+calc(node.right,depth-1);
    }
}