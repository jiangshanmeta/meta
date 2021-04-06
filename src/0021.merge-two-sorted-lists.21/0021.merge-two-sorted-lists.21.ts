class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function mergeTwoLists (l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead:ListNode = new ListNode(0);
    let last = dummyHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            last.next = l1;
            last = last.next;
            l1 = l1.next;
            last.next = null;
        } else {
            last.next = l2;
            last = last.next;
            l2 = l2.next;
            last.next = null;
        }
    }
    if (l1 !== null) {
        last.next = l1;
    } else if (l2 !== null) {
        last.next = l2;
    }
    return dummyHead.next;
}
