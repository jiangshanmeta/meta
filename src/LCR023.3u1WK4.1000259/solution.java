/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int d1 = getDepth(headA);
        int d2 = getDepth(headB);
        while(d1>d2){
            d1--;
            headA = headA.next;
        }
        while(d2>d1){
            d2--;
            headB = headB.next;
        }
        while (headA != headB){
            headA = headA.next;
            headB = headB.next;
        }
        return headA;
    }
    
    private int getDepth(ListNode head){
        int cnt = 0;
        while(head != null){
            head = head.next;
            cnt++;
        }
        return cnt;
    }
}