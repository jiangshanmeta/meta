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

function mergeNodes (head: ListNode | null): ListNode | null {
    if (!head) {
        return head;
    }
    let prev = head;
    let current = head.next;
    while (current) {
        let sum = 0;
        while (current && current.val !== 0) {
            sum += current.val;
            current = current.next;
        }
        if (sum !== 0) {
            prev.next = new ListNode(sum);
            prev = prev.next;
        }
        while (current && current.val === 0) {
            current = current.next;
        }
    }

    return head.next;
}
