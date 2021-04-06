class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function middleNode (head: ListNode | null): ListNode | null {
    let fast:ListNode|null = head;
    let slow:ListNode|null = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = (slow as ListNode).next;
    }
    return slow;
}
