class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head === null){
        return null;
    }
    let prev = head;
    let cur:ListNode|null = head.next;
    while(cur !== null){
        if(prev.val === cur.val){
            prev.next = cur.next;
            cur = cur.next;
        }else{
            prev = cur;
            cur = cur.next;
        }
    }
    return head;
};