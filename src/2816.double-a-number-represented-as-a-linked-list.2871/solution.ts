class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function doubleIt (head: ListNode | null): ListNode | null {
    const seq:number[] = [];
    while (head) {
        seq.push(head.val);
        head = head.next;
    }

    let addon = 0;
    seq.reverse();

    const dummyHead = new ListNode(0);
    for (let i = 0; i < seq.length; i++) {
        const num = seq[i] * 2 + addon;
        const digit = num % 10;
        const node = new ListNode(digit);
        node.next = dummyHead.next;
        dummyHead.next = node;
        addon = (num - digit) / 10;
    }

    if (addon) {
        const node = new ListNode(addon);
        node.next = dummyHead.next;
        return node;
    }

    return dummyHead.next;
}
