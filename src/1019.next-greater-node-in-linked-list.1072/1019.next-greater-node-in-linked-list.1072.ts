class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function nextLargerNodes(head: ListNode | null): number[] {
    const result:number[] = [];
    const stackN:number[] = [];
    const stackI:number[] = [];
    let index = 0;
    while(head){
        const val = head.val;
        while(stackN.length && val>stackN[stackN.length-1]){
            result[stackI.pop()] = val;
            stackN.pop()
        }
        head = head.next;
        stackN.push(val);
        stackI.push(index++);
        result.push(0);
    }
    return result;
};