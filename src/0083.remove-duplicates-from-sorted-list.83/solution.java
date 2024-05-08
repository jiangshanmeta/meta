/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) {
            return null;
        }
        ListNode last = head;
        ListNode current = head.next;
        while (current != null) {
            if (current.val == last.val) {
                current = current.next;
                last.next = current;
            } else {
                last = current;
                current = current.next;
            }

        }

        return head;
    }
}