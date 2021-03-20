class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeDuplicateNodes(head: ListNode | null): ListNode | null {
    if(head === null){
        return null;
    }

    const set = new Set<number>();
    set.add(head.val);
    let prev = head;
    let cur:ListNode|null = head.next;
    while(cur !== null){
        if(set.has(cur.val)){
            prev.next = cur.next;
            cur = cur.next;
        }else{
            set.add(cur.val)
            prev = cur;
            cur = cur.next;
        }
    }

    return head;
};