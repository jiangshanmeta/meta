/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let count1 = k;
    let nodeA = head;
    while (count1 > 1) {
        count1--;
        nodeA = nodeA.next;
    }

    let fast = head;
    let slow = head;
    while (k) {
        k--;
        fast = fast.next;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    const tmp = nodeA.val;
    nodeA.val = slow.val;
    slow.val = tmp;
    return head;
};
