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
    public List<Double> averageOfLevels(TreeNode root) {
        if (root == null) {
            return List.of();
        }
        List<Double> result = new ArrayList<>();
        travel(List.of(root), result);
        return result;
    }

    private void travel(List<TreeNode> level, List<Double> result) {
        double sum = 0;
        List<TreeNode> next = new ArrayList<>();

        for (TreeNode node : level) {
            sum += node.val;
            if (node.left != null) {
                next.add(node.left);
            }
            if (node.right != null) {
                next.add(node.right);
            }
        }

        result.add(sum / level.size());

        if (!next.isEmpty()) {
            travel(next, result);
        }

    }
}