/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> result = new ArrayList<>();
        dfs(root, result, new ArrayList<>());
        return result;
    }

    private void dfs(TreeNode root, List<String> result, List<String> seq) {
        seq.add(String.valueOf(root.val));
        if (root.left == null && root.right == null) {
            result.add(String.join("->", seq));
            seq.removeLast();
            return;
        }
        if (root.left != null) {
            dfs(root.left, result, seq);
        }
        if (root.right != null) {
            dfs(root.right, result, seq);
        }
        seq.removeLast();
    }

}