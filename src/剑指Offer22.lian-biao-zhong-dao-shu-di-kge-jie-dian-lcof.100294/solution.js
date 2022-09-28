/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let fast = head;
    while (k--) {
        fast = fast.next;
    }
    while (fast) {
        head = head.next;
        fast = fast.next;
    }
    return head;
};
