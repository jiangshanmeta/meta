/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    const dummyHead = new ListNode();
    dummyHead.next = head;
    let prev = dummyHead;
    while (head && head.val !== val) {
        prev = prev.next;
        head = head.next;
    }
    prev.next = head.next;
    return dummyHead.next;
};
