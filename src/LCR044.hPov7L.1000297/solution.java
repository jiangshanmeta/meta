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
    private final List<Integer> result = new ArrayList<>();
    public List<Integer> largestValues(TreeNode root) {
        if(root == null){
            return result;
        }
        levelOrder(List.of(root));
        return result;
    }
    
    private void levelOrder(List<TreeNode> nodes){
        List<TreeNode> next = new ArrayList<>();
        int max = Integer.MIN_VALUE;
        for(TreeNode node : nodes){
            max = Math.max(max,node.val);
            if(node.left != null){
                next.add(node.left);
            }
            if(node.right != null){
                next.add(node.right);
            }
        }
        result.add(max);
        
        if(!next.isEmpty()){
            levelOrder(next);
        }
    }
}