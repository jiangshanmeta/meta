class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function mergeInBetween (list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    }
    a--;
    let headA = list1;
    let headB = list1;
    while (a > 0) {
        headA = headA.next!;
        headB = headB.next!;
        a--;
        b--;
    }
    while (b > 0) {
        headB = headB.next!;
        b--;
    }
    headA.next = list2;
    while (list2.next !== null) {
        list2 = list2.next;
    }
    list2.next = headB.next;
    headB.next = null;
    return list1;
}
