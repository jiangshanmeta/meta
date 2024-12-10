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
    public ListNode oddEvenList(ListNode head) {
        ListNode oddDummyHead = new ListNode(0);
        ListNode evenDummyHead = new ListNode(0);
        ListNode oddTail = oddDummyHead;
        ListNode evenTail = evenDummyHead;
        boolean isOdd = true;
        while (head != null){
            ListNode next = head.next;
            head.next = null;
            if(isOdd){
                oddTail.next = head;
                oddTail = head;
            }else{
                evenTail.next = head;
                evenTail = head;
            }
            isOdd = !isOdd;
            head = next;
        }
        oddTail.next = evenDummyHead.next;
        return oddDummyHead.next;
    }
}