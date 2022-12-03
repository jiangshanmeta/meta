/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
    const nodes = [];
    while (head) {
        const next = head.next;
        head.next = null;
        while (nodes.length && head.val > nodes[nodes.length - 1].val) {
            nodes.pop();
        }
        nodes.push(head);
        head = next;
    }
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    return nodes.length ? nodes[0] : null;
};
