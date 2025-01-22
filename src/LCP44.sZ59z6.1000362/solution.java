/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    Set<Integer> set = new HashSet<>();
    public int numColor(TreeNode root) {
        if(root == null){
            return 0;
        }
        travel(root);
        return set.size();
    }
    
    private void travel(TreeNode root){
        set.add(root.val);
        if(root.left != null){
            travel(root.left);
        }
        if(root.right != null){
            travel(root.right);
        }
        
    }
}