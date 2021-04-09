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

function reverseKGroup (head: ListNode | null, k: number): ListNode | null {
    if (!head) {
        return head;
    }
    let count = 1;
    let node = head;
    while (node && count !== k) {
        count++;
        node = node.next;
    }
    if (node) {
        const tail = reverseKGroup(node.next, k);
        node.next = null;
        const newHead = reverse(head);
        head.next = tail;
        return newHead;
    } else {
        return head;
    }
}

function reverse (node:ListNode|null) {
    if (!node) {
        return node;
    }
    const dummyHead = new ListNode(0);
    while (node) {
        const next = node.next;
        node.next = dummyHead.next;
        dummyHead.next = node;
        node = next;
    }
    return dummyHead.next;
}
