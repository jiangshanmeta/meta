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
            headA = headA.next;
            d1--;
        }
        while (d2>d1){
            headB = headB.next;
            d2--;
        }
        while (headA != headB){
            headA = headA.next;
            headB = headB.next;
        }
        return headA;
    }
    
    private int getDepth(ListNode node){
        int count = 0;
        while (node != null){
            node = node.next;
            count++;
        }
        return count;
    }
}