/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    // 拿到第m-1个节点 拿到第n个节点
    const dummyHead = new ListNode();
    dummyHead.next = head;
    m--;
    let counter = 0;
    // pointer1 第m-1个节点 它及之前的节点不用翻转
    let pointer1 = dummyHead;
    // pointer2 第n个节点 它之后的节点不用翻转
    let pointer2 = dummyHead;

    while (counter < m) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
        counter++;
    }

    while (counter < n) {
        pointer2 = pointer2.next;
        counter++;
    }

    const dummyHead2 = new ListNode();
    dummyHead2.next = pointer2.next;
    pointer2.next = null;

    // 翻转m-n的节点
    let reverseNode = pointer1.next;
    while (reverseNode) {
        const tmp = reverseNode.next;
        reverseNode.next = dummyHead2.next;
        dummyHead2.next = reverseNode;
        reverseNode = tmp;
    }

    pointer1.next = dummyHead2.next;
    return dummyHead.next;
};
