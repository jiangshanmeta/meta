/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let fast = dummyHead;
    let slow = dummyHead;
    while (n--) {
        fast = fast.next;
    }
    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummyHead.next;
};
