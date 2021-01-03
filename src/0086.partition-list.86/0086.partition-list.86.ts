class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function partition(head: ListNode | null, x: number): ListNode | null {
    if(head === null){
        return null;
    }
    const dummyHead1 = new ListNode(0);
    const dummyHead2 = new ListNode(0);
    let tail1 = dummyHead1;
    let tail2 = dummyHead2;
    while(head){
        const next = head.next;
        head.next = null;
        if(head.val<x){
            tail1.next = head;
            tail1 = tail1.next;
        }else{
            tail2.next = head;
            tail2 = tail2.next;
        }
        head = next;
    }
    if(dummyHead1.next){
        tail1.next = dummyHead2.next;
        return dummyHead1.next;
    }else{
        return dummyHead2.next;
    }

};