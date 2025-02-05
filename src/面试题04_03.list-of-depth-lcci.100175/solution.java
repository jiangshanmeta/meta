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
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    private final List<ListNode> result = new ArrayList<>();
    public ListNode[] listOfDepth(TreeNode tree) {
        if(tree == null){
            return new ListNode[]{};
        }

        bfs(List.of(tree));

        return result.toArray(new ListNode[0]);
    }

    private void bfs(List<TreeNode> nodes){
        List<TreeNode> next = new ArrayList<>();
        ListNode dummyHead = new ListNode(0);
        ListNode last = dummyHead;
        for(TreeNode node:nodes){
            last.next = new ListNode(node.val);
            last = last.next;
            if(node.left != null){
                next.add(node.left);
            }
            if(node.right != null){
                next.add(node.right);
            }
        }

        result.add(dummyHead.next);

        if(!next.isEmpty()){
            bfs(next);
        }
    }
}