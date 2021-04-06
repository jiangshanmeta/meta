class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function isPalindrome (head: ListNode | null): boolean {
    const list:number[] = [];
    while (head !== null) {
        list.push(head.val);
        head = head.next;
    }
    let left = 0;
    let right = list.length - 1;
    while (left < right) {
        if (list[left++] !== list[right--]) {
            return false;
        }
    }
    return true;
}
