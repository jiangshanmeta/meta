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
    public ListNode mergeNodes(ListNode head) {
        ListNode dummyHead = new ListNode(0);
        ListNode tail = dummyHead;
        int sum = 0;
        head = head.next;
        while (head != null){
            
            while (head != null && head.val != 0){
                sum += head.val;
                head = head.next;
            }
            
            tail.next = new ListNode(sum);
            sum = 0;
            tail = tail.next;
            
            head = head.next;
        }
        
        return dummyHead.next;
    }
}