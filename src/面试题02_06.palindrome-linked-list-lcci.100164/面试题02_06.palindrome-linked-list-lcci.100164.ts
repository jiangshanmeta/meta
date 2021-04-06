class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function isPalindrome (head: ListNode | null): boolean {
    const vals:number[] = [];
    while (head !== null) {
        vals.push(head.val);
        head = head.next;
    }
    let left = 0;
    let right = vals.length - 1;
    while (left < right) {
        if (vals[left++] !== vals[right--]) {
            return false;
        }
    }
    return true;
}
