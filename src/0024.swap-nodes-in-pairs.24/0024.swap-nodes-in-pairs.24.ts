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

function swapPairs (head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    const first = head;
    const second = head.next;
    const tail = swapPairs(second.next);
    first.next = tail;
    second.next = first;
    return second;
}
