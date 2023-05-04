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

function reverseEvenLengthGroups (head: ListNode | null, index = 1): ListNode | null {
    if (!head) {
        return head;
    }
    const first = head;
    let count = 1;
    while (count < index && head.next) {
        count++;
        head = head.next;
    }
    if (head) {
        head.next = reverseEvenLengthGroups(head.next, index + 1);
    }

    if (count % 2 === 0) {
        const tail = head?.next;
        if (head) {
            head.next = null;
        }
        return reverse(first, tail);
    }
    return first;
}

function reverse (head:ListNode | null, tail:ListNode | null) {
    const dummyHead = new ListNode(0);
    dummyHead.next = tail;
    while (head) {
        const n = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = n;
    }
    return dummyHead.next;
}
