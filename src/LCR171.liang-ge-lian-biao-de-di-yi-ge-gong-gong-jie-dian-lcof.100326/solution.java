class Solution {
    ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int depthA = getDepth(headA);
        int depthB = getDepth(headB);
        while (depthA>depthB){
            headA = headA.next;
            depthA--;
        }
        while (depthA<depthB){
            headB = headB.next;
            depthB--;
        }
        while (headA != headB){
            headA = headA.next;
            headB = headB.next;
        }
        return headA;
    }

    private int getDepth(ListNode head){
        int count = 0;
        while (head != null){
            count++;
            head = head.next;
        }
        return count;
    }
}