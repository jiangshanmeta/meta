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
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        if (root == null) {
            return List.of();
        }
        List<List<Integer>> result = new ArrayList<>();

        travel(List.of(root), result, false);

        return result;
    }

    private void travel(List<TreeNode> level, List<List<Integer>> result, boolean reverse) {
        List<Integer> row = new ArrayList<>();
        List<TreeNode> nextLevel = new ArrayList<>();
        for (TreeNode node : level) {
            row.add(node.val);
            if (node.left != null) {
                nextLevel.add(node.left);
            }
            if (node.right != null) {
                nextLevel.add(node.right);
            }

        }
        if (reverse) {
            row = row.reversed();
        }
        result.add(row);

        if (!nextLevel.isEmpty()) {
            travel(nextLevel, result, !reverse);
        }

    }
}