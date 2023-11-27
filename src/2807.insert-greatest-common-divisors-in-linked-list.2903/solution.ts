class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function gcd (a:number, b:number) {
    if (a < b) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    while (b !== 0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
function insertGreatestCommonDivisors (head: ListNode | null): ListNode | null {
    if (!head) {
        return head;
    }
    let prev = head;
    while (prev.next) {
        const next = prev.next;
        const nn = new ListNode(gcd(prev.val, next.val));
        nn.next = next;
        prev.next = nn;
        prev = next;
    }
    return head;
}
