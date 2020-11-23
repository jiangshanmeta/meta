class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reversePrint(head: ListNode | null): number[] {
    const result:number[] = [];
    while(head !== null){
        result.push(head.val);
        head = head.next;
    }
    result.reverse();
    return result;
};