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

function deleteDuplicates (head: ListNode | null): ListNode | null {
    if (head === null || !head.next) {
        return head;
    }
    if (head.next.val === head.val) {
        const val = head.val;
        head = head.next.next;
        while (head && head.val === val) {
            head = head.next;
        }
        return deleteDuplicates(head);
    } else {
        head.next = deleteDuplicates(head.next);
        return head;
    }
}
