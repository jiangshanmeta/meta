class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

type ListNodeNull = ListNode|null;
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(head === null){
        return head;
    }
    let node:ListNodeNull = head;
    let count = 0;
    while(node !== null){
        node = node.next;
        count++;
    }
    k %= count;
    if(k === 0){
        return head;
    }
    let fast:ListNodeNull = head;
    while(k--){
        fast = (<ListNode>fast).next;
    }
    let slow:ListNodeNull = head;
    while( (fast as ListNode).next !== null){
        fast = (fast as ListNode).next;
        slow = (slow as ListNode).next;
    }
    const newHead = (<ListNode>slow).next;
    (<ListNode>slow).next = null;
    (<ListNode>fast).next = head;
    return newHead
};