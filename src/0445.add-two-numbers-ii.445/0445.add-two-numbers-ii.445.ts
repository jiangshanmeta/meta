
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    
    return reverse(addTwoNumbers2(reverse(l1),reverse(l2)));
};

function reverse(l:ListNode){
    const dummyHead = new ListNode();
    while(l){
        const n = l.next;
        l.next = dummyHead.next;
        dummyHead.next = l;
        l = n;
    }
    return dummyHead.next;
}

function addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0);
    let tail = dummyHead;
    let addon = 0;
    while(l1 && l2){
        const sum = addon+l1.val+l2.val;
        const digit = sum%10;
        const node = new ListNode(digit);
        tail.next = node;
        tail = node;
        addon = (sum-digit)/10;
        l1 = l1.next;
        l2 = l2.next;
    }
    while(l1){
        const sum = addon+l1.val;
        const digit = sum%10;
        const node = new ListNode(digit);
        tail.next = node;
        tail = node;
        addon = (sum-digit)/10;
        l1 = l1.next;
    }
    while(l2){
        const sum = addon+l2.val;
        const digit = sum%10;
        const node = new ListNode(digit);
        tail.next = node;
        tail = node;
        addon = (sum-digit)/10;
        l2 = l2.next;
    }
    if(addon){
        const node = new ListNode(addon);
        tail.next = node;
    }

    return dummyHead.next;
};