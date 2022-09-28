class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function kthToLast (head: ListNode | null, k: number): number {
    let fast:ListNode|null = head as ListNode;
    while (k--) {
        fast = (fast as ListNode).next;
    }
    let slow:ListNode|null = head;
    while (fast !== null) {
        fast = fast.next;
        slow = (slow as ListNode).next;
    }
    return (slow as ListNode).val;
}
