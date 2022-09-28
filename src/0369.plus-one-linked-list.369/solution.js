/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function (head) {
    return reverse(add1(reverse(head)));
};

function reverse (head) {
    const dummyHead = new ListNode(0);
    while (head) {
        const next = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = next;
    }
    return dummyHead.next;
}

function add1 (head) {
    let addon = 1;
    let node = head;
    let prev = null;
    while (node && addon) {
        const sum = node.val + addon;
        const digit = sum % 10;
        addon = (sum - digit) / 10;
        node.val = digit;
        prev = node;
        node = node.next;
    }
    if (addon) {
        prev.next = new ListNode(addon);
    }
    return head;
}
