class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let fast:ListNode|null = head;
    while(k>0){
        fast = (fast as ListNode).next;
        k--;
    }
    let slow:ListNode|null = head;
    while(fast !== null){
        slow = (slow as ListNode).next;
        fast = fast.next;
    }
    return slow;
};