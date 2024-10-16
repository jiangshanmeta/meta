/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteNode(ListNode head, int val) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;
        while (head != null){
            if(head.val == val){
                prev.next = head.next;
                prev = prev.next;
                head = head.next;
            }else{
                prev = head;
                head = head.next;
            }
        }
        return dummy.next;
    }
}