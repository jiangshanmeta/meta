class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function reverseBetween (head: ListNode | null, m: number, n: number): ListNode | null {
    if (!head) {
        return head;
    }
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let slow = dummyHead;
    let fast = dummyHead;
    m--;
    while (m > 0) {
        slow = slow.next!;
        fast = fast.next!;
        m--;
        n--;
    }
    while (n > 0) {
        fast = fast.next!;
        n--;
    }
    const tail = fast.next;
    fast.next = null;
    slow.next = reverse(slow.next);
    while (slow.next) {
        slow = slow.next;
    }
    slow.next = tail;
    return dummyHead.next;
}

function reverse (head:ListNode) {
    const dummyHead = new ListNode(0);
    while (head) {
        const node = head;
        head = head.next;
        node.next = dummyHead.next;
        dummyHead.next = node;
    }
    return dummyHead.next;
}
