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
    public ListNode trainningPlan(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode tail = dummyHead;
        while (l1 != null && l2 != null){
            if(l1.val< l2.val){
                ListNode next = l1.next;
                tail.next = l1;
                l1 = next;
                
            }else {
                ListNode next = l2.next;
                tail.next = l2;
                l2 = next;
                
            }
            tail = tail.next;
        }
        if(l1 != null){
            tail.next = l1;
        }else if(l2 != null){
            tail.next = l2;
        }
        return dummyHead.next;
    }
}