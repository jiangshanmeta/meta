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

function reverseList (head: ListNode | null): ListNode | null {
    const dummyHead = new ListNode();
    while (head) {
        const tmp = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = tmp;
    }
    return dummyHead.next;
}
