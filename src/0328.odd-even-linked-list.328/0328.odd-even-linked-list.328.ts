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

function oddEvenList (head: ListNode | null): ListNode | null {
    const headOdd = new ListNode(0);
    let tailOdd = headOdd;
    const headEven = new ListNode(0);
    let tailEven = headEven;
    while (head) {
        const odd = head;
        const even = head.next;
        const next = even ? even.next : null;
        tailOdd.next = odd;
        tailOdd = odd;
        tailOdd.next = null;
        if (even) {
            tailEven.next = even;
            tailEven = even;
            even.next = null;
        }
        head = next;
    }
    tailOdd.next = headEven.next;
    return headOdd.next;
}
