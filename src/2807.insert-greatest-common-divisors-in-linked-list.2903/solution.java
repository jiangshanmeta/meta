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
    public ListNode insertGreatestCommonDivisors(ListNode head) {
        ListNode start = head;
        while (head.next != null){
            ListNode next = head.next;
            ListNode insert = new ListNode(gcd(head.val, next.val));
            insert.next = next;
            head.next = insert;
            head = next;
        }
        return start;
    }

    private int gcd(int a,int b){
        if(b == 0){
            return a;
        }
        return gcd(b,a%b);
    }
}