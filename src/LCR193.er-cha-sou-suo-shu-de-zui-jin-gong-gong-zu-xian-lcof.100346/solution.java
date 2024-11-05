/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(p.val>q.val){
            TreeNode t = p;
            p = q;
            q = t;
        }
        return search(root,p,q);
    }
    
    private TreeNode search(TreeNode root, TreeNode p, TreeNode q){
        if(root == p || root == q){
            return root;
        }
        if(root.val<p.val){
            return search(root.right,p,q);
        }else if(root.val>q.val){
            return search(root.left,p,q);
        }
        return root;
    }
}