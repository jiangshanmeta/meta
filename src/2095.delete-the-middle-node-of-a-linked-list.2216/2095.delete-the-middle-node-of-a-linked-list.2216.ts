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

function deleteMiddle (head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return null;
    }
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    prev.next = prev.next.next;
    return head;
}
