class Solution {
    public TreeNode mirrorTree(TreeNode root) {
        if (root == null) {
            return null;
        }

        TreeNode left = mirrorTree(root.left);
        root.left = mirrorTree(root.right);
        root.right = left;
        return root;
    }
}