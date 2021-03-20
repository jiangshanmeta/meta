class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0);
    let tail = dummyHead;
    let addon = 0;
    while(l1 && l2){
        const sum = addon+l1.val+l2.val;
        l1 = l1.next;
        l2 = l2.next;
        const digit = sum%10;
        tail.next = new ListNode(digit);
        addon = (sum-digit)/10;
        tail = tail.next;
    }
    while(l1){
        const sum = addon+l1.val;
        l1 = l1.next;
        const digit = sum%10;
        tail.next = new ListNode(digit);
        addon = (sum-digit)/10;
        tail = tail.next;
    }
    while(l2){
        const sum = addon+l2.val;
        l2 = l2.next;
        const digit = sum%10;
        tail.next = new ListNode(digit);
        addon = (sum-digit)/10;
        tail = tail.next;
    }
    if(addon){
        tail.next = new ListNode(addon);
    }
    return dummyHead.next;
};