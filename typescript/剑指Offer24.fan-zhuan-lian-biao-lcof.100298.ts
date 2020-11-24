class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0);
    while(head !== null){
        const nextNode:ListNode|null = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = nextNode;
    }
    return dummyHead.next;
};