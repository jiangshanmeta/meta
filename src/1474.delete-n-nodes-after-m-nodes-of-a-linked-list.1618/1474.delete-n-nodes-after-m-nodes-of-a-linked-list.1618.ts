
class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function deleteNodes (head: ListNode | null, m: number, n: number): ListNode | null {
    if (!head) {
        return null;
    }
    let node1 = head;
    let m1 = m - 1;
    while (m1 && node1) {
        m1--;
        node1 = node1.next;
    }
    if (!node1) {
        return head;
    }
    let node2 = node1.next;
    let n1 = n - 1;
    while (n1 && node2) {
        n1--;
        node2 = node2.next;
    }
    if (node2) {
        node1.next = deleteNodes(node2.next, m, n);
        node2.next = null;
    } else {
        node1.next = null;
    }

    return head;
}
