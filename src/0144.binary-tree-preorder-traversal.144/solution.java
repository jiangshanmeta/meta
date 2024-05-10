import java.util.ArrayList;
import java.util.List;

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
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        if (root == null) {
            return list;
        }
        _preorder(root, list);
        return list;
    }

    private void _preorder(TreeNode root, List<Integer> list) {
        list.add(root.val);
        if (root.left != null) {
            _preorder(root.left, list);
        }
        if (root.right != null) {
            _preorder(root.right, list);
        }
    }
}