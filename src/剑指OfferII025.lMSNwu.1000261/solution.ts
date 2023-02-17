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

function addTwoNumbers (l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 || !l2) {
        return l1 || l2;
    }
    l1 = reverse(l1);
    l2 = reverse(l2);
    const head = l1;
    let tail = head;
    let addon = 0;
    while (l1 && l2) {
        const sum = l1.val + l2.val + addon;
        const digit = sum % 10;
        l1.val = digit;
        addon = (sum - digit) / 10;
        tail = l1;
        l1 = l1.next;
        l2 = l2.next;
    }
    if (l1) {
        while (l1 && addon) {
            const sum = l1.val + addon;
            const digit = sum % 10;
            tail = l1;
            l1.val = digit;
            addon = (sum - digit) / 10;
            l1 = l1.next;
        }
    }

    if (l2) {
        tail.next = l2;
        while (l2 && addon) {
            const sum = l2.val + addon;
            const digit = sum % 10;
            l2.val = digit;
            addon = (sum - digit) / 10;
            tail = l2;
            l2 = l2.next;
        }
    }
    if (addon) {
        tail.next = new ListNode(addon);
    }
    return reverse(head);
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
