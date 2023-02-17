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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList (head: ListNode | null): void {
    if (!head) {
        return;
    }
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let leftHalf = head;
    let rightHalf = reverse(slow.next);
    slow.next = null;
    while (leftHalf && rightHalf) {
        const nL = leftHalf.next;
        const nR = rightHalf.next;
        rightHalf.next = nL;
        leftHalf.next = rightHalf;
        leftHalf = nL;
        rightHalf = nR;
    }
}

function reverse (head:ListNode | null) {
    if (!head) {
        return head;
    }
    const dummyHead = new ListNode(0);
    while (head) {
        const next = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = next;
    }
    return dummyHead.next;
}
