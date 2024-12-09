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
    public ListNode partition(ListNode head, int x) {
        ListNode lessDummyHead = new ListNode(0);
        ListNode gteDummyHead = new ListNode(0);
        ListNode lessTail = lessDummyHead;
        ListNode gteTail = gteDummyHead;
        
        while (head != null){
            ListNode next = head.next;
            head.next = null;
            if(head.val<x){
                lessTail.next = head;
                lessTail = head;
            }else {
                gteTail.next = head;
                gteTail = head;
            }
            head = next;
        }
        
        lessTail.next = gteDummyHead.next;
        
        return lessDummyHead.next;
    }
}