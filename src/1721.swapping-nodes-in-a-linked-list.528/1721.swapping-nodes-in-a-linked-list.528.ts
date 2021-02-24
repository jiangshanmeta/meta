class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    if(!head){
        return head;
    }
    let count = k;
    let node = head;
    while(count>1){
        count--;
        node = node.next!;
    }
    let slow = head;
    let fast = head;
    while(k){
        k--;
        fast = fast.next!;
    }
    while(fast){
        slow = slow.next!;
        fast = fast.next!;
    }
    const tmp = node.val;
    node.val = slow.val;
    slow.val = tmp;
    return head;
};