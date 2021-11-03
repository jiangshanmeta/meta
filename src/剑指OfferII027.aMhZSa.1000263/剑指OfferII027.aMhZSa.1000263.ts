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

function isPalindrome (head: ListNode | null): boolean {
    const seq:number[] = [];
    while (head) {
        seq.push(head.val);
        head = head.next;
    }
    let left = 0;
    let right = seq.length - 1;
    while (left < right) {
        if (seq[left++] !== seq[right--]) {
            return false;
        }
    }
    return true;
}
