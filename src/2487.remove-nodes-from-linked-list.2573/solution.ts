/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNodes (head: ListNode | null): ListNode | null {
    const nodes:ListNode[] = [];
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

    return nodes.length > 0 ? nodes[0] : null;
}
