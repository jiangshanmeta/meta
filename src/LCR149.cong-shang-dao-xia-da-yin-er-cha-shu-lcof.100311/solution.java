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
    int[] tmp = new int[2000];
    int index = 0;

    public int[] decorateRecord(TreeNode root) {
        if(root == null){
            return new int[0];
        }
        bfs(List.of(root));
        
        int[] result = new int[index];
        System.arraycopy(tmp,0,result,0,index);
        
        return result;
    }
    
    private void bfs(List<TreeNode> level){
        List<TreeNode> next = new ArrayList<>();
        for(TreeNode node : level){
            tmp[index++] = node.val;
            if(node.left != null){
                next.add(node.left);
            }
            if(node.right != null){
                next.add(node.right);
            }
        }
        if(!next.isEmpty()){
            bfs(next);
        }
        
    }


}