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
    public ListNode rotateRight(ListNode head, int k) {
        if(head == null){
            return null;
        }
        int L = getLength(head);
        k %= L;
        if(k == 0){
            return head;
        }
        ListNode slow = head;
        ListNode fast = head;
        while (k>0){
            fast = fast.next;
            k--;
        }
        while (fast.next != null){
            slow = slow.next;
            fast = fast.next;
        }
        ListNode next = slow.next;
        slow.next = null;
        fast.next = head;
        
        

        return next;
    }

    private int getLength(ListNode head){
        int count = 0;
        while (head != null){
            head = head.next;
            count++;
        }
        return count;
    }
}