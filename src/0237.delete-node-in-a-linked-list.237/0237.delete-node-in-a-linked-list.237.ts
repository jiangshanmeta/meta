class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode (root: ListNode | null): void {
    if (root !== null && root.next !== null) {
        root.val = root.next.val;
        root.next = root.next.next;
    }
}
