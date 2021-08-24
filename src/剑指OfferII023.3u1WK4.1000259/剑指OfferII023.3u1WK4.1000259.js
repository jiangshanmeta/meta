/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let countA = getCount(headA);
    let countB = getCount(headB);
    while (countA > countB) {
        headA = headA.next;
        countA--;
    }
    while (countB > countA) {
        headB = headB.next;
        countB--;
    }
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};

function getCount (head) {
    let count = 0;
    while (head) {
        count++;
        head = head.next;
    }
    return count;
}
