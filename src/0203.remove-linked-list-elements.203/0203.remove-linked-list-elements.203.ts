class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function removeElements (head: ListNode | null, val: number): ListNode | null {
    const dummyHead = new ListNode(0);
    let node:ListNode = dummyHead;
    node.next = head;
    while (node.next !== null) {
        if (node.next.val === val) {
            node.next = node.next.next;
        } else {
            node = <ListNode>node.next;
        }
    }
    return dummyHead.next;
}
