/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function (head, m, n) {
    if (!head) {
        return head;
    }
    let node = head;
    let rest = m - 1;
    while (node && rest) {
        node = node.next;
        rest--;
    }
    if (!node) {
        return head;
    }
    let rNode = node.next;
    rest = n - 1;
    while (rNode && rest) {
        rNode = rNode.next;
        rest--;
    }
    if (!rNode) {
        node.next = null;
        return head;
    }
    node.next = deleteNodes(rNode.next, m, n);
    return head;
};
