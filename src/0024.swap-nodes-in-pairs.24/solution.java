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
    public ListNode swapPairs(ListNode head) {
        ListNode dummyHead = new ListNode(0);
        ListNode prev = dummyHead;
        while (head != null){
            ListNode second = head.next;
            if(second == null){
                prev.next = head;
                break;
            }
            ListNode next = second.next;
            
            prev.next = second;
            second.next = head;
            head.next = null;
            
            prev = head;
            
            head = next;
        }

        return dummyHead.next;
    }
}