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
    public List<Integer> largestValues(TreeNode root) {
        if (root == null) {
            return List.of();
        }
        List<Integer> result = new ArrayList<>();
        travel(List.of(root), result);
        return result;
    }

    private void travel(List<TreeNode> level, List<Integer> result) {
        int max = Integer.MIN_VALUE;
        List<TreeNode> next = new ArrayList<>();
        for (TreeNode node : level) {
            max = Math.max(max, node.val);

            if (node.left != null) {
                next.add(node.left);
            }
            if (node.right != null) {
                next.add(node.right);
            }
        }

        result.add(max);

        if (!next.isEmpty()) {
            travel(next, result);
        }
    }

}