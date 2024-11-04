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
    public List<List<Integer>> decorateRecord(TreeNode root) {
        if(root == null){
            return List.of();
        }
        List<List<Integer>> result = new ArrayList<>();
        travel(List.of(root),result);
        return result;
    }
    
    private void travel(List<TreeNode> row, List<List<Integer>> result){
        List<Integer> vals = new ArrayList<>();
        List<TreeNode> next = new ArrayList<>();
        for(TreeNode node : row){
            vals.add(node.val);
            if(node.left != null){
                next.add(node.left);
            }
            if(node.right != null){
                next.add(node.right);
            }
        }
        result.add(vals);
        if(!next.isEmpty()){
            travel(next,result);
        }
        
    }
}