
class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function plusOne (head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    return reverse(add1(reverse(head)));
}

function reverse (head:ListNode):ListNode {
    const dummyHead = new ListNode();
    while (head) {
        const next = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = next;
    }
    return dummyHead.next;
}

function add1 (head:ListNode) {
    let node = head;
    let addon = 1;
    let prev = head;
    while (node && addon) {
        const sum = addon + node.val;
        const digit = sum % 10;
        node.val = digit;
        addon = (sum - digit) / 10;
        prev = node;
        node = node.next;
    }
    if (addon) {
        prev.next = new ListNode(addon);
    }
    return head;
}
