class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let fast:ListNode|null = dummyHead;
    while(n>0){
        fast = (fast as ListNode).next;
        n--;
    }
    let slow:ListNode|null = dummyHead;
    while(fast !== null && fast.next !== null){
        fast = fast.next;
        slow = (slow as ListNode).next;
    }
    
    (<ListNode>slow).next = ((slow as ListNode).next as ListNode).next;
    return dummyHead.next;
};