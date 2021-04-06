/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    }
    a--;
    let headA = list1;
    let headB = list1;
    while (a > 0) {
        headA = headA.next;
        headB = headB.next;
        a--;
        b--;
    }
    while (b > 0) {
        headB = headB.next;
        b--;
    }
    headA.next = list2;
    while (list2.next !== null) {
        list2 = list2.next;
    }
    list2.next = headB.next;
    headB.next = null;
    return list1;
};
