import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        if (root != null) {
            _inorderTraversal(root, list);
        }
        return list;
    }

    private void _inorderTraversal(TreeNode root, List<Integer> list) {
        if (root.left != null) {
            _inorderTraversal(root.left, list);
        }

        list.add(root.val);

        if (root.right != null) {
            _inorderTraversal(root.right, list);
        }

    }

}