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

function sortList (head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    const list:ListNode[] = [];
    while (head) {
        list.push(head);
        head = head.next;
    }
    list.sort((a, b) => a.val - b.val);
    for (let i = 0; i < list.length - 1; i++) {
        list[i].next = list[i + 1];
    }
    list[list.length - 1].next = null;
    return list[0];
}
