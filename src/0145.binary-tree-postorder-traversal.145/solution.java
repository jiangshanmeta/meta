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
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        if (root == null) {
            return list;
        }
        _post(root, list);
        return list;
    }

    private void _post(TreeNode root, List<Integer> list) {
        if (root.left != null) {
            _post(root.left, list);
        }
        if (root.right != null) {
            _post(root.right, list);
        }

        list.add(root.val);
    }

}