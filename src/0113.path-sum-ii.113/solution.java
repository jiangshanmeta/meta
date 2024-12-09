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
    List<List<Integer>> result;
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        if(root == null){
            return List.of();
        }
        result = new ArrayList<>();

        dfs(root,new ArrayList<>(),targetSum);

        return result;
    }

    private void dfs(TreeNode node,List<Integer> path,int rest){
        path.add(node.val);
        rest -= node.val;
        if(node.left == null && node.right == null){
            if(rest == 0){
                result.add(new ArrayList<>(path));
            }
            path.removeLast();
            return;
        }

        if(node.left != null){
            dfs(node.left,path,rest);
        }
        if(node.right != null){
            dfs(node.right,path,rest);
        }

        path.removeLast();
    }
}