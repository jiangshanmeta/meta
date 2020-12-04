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
    let countA = getDepth(headA);
    let countB = getDepth(headB);
    while (countA > countB) {
        countA--;
        headA = headA.next;
    }
    while (countB > countA) {
        countB--;
        headB = headB.next;
    }
    while (headA && headB && headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA === headB ? headA : null;
};

function getDepth (head) {
    let result = 0;
    while (head) {
        result++;
        head = head.next;
    }
    return result;
}
