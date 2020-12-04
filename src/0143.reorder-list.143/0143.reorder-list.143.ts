class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if(head === null){
        return
    }
    let fast:ListNode|null = head;
    let slow:ListNode|null = head;
    while(fast !== null && fast.next !== null){
        fast = (<ListNode>(<ListNode>fast).next).next;
        slow = (<ListNode>slow).next;
    }
    let rightHalf = reverse((<ListNode>slow).next);
    (<ListNode>slow).next = null;
    const dummyHead = new ListNode(0);
    let leftHalf:ListNode|null = head;
    while(leftHalf !== null && rightHalf !== null){
        const leftNext:ListNode|null = leftHalf.next;
        const rightNext:ListNode|null = rightHalf.next;
        leftHalf.next = rightHalf;
        rightHalf.next = leftNext;
        leftHalf = leftNext;
        rightHalf = rightNext;
    }

};

function reverse(node:ListNode|null):ListNode|null{
    const dummyHead = new ListNode(0);
    while(node !== null){
        const next = node.next;
        node.next = dummyHead.next;
        dummyHead.next = node;
        node = next;
    }
    return dummyHead.next;
}