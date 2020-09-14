/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const beforeHead = new ListNode();
    const afterHead = new ListNode();
    let beforeNode = beforeHead;
    let afterNode = afterHead;
    while (head) {
        const n = head.next;
        head.next = null;
        if (head.val < x) {
            beforeNode.next = head;
            beforeNode = head;
        } else {
            afterNode.next = head;
            afterNode = head;
        }
        head = n;
    }
    if (!beforeHead.next) {
        return afterHead.next;
    }
    beforeNode.next = afterHead.next;
    return beforeHead.next;
};
