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

function pairSum (head: ListNode | null): number {
    const list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }
    let left = 0;
    let right = list.length - 1;
    let result = -Infinity;
    while (left < right) {
        result = Math.max(result, list[left++] + list[right--]);
    }
    return result;
}
