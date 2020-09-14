/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head) {
        return head;
    }
    const oddStart = head;
    const evenStart = head.next;
    let oddNode = oddStart;
    let evenNode = evenStart;
    // 链表重排  拆分链表
    while (oddNode.next !== null && evenNode.next !== null) {
        oddNode.next = oddNode.next.next;
        oddNode = oddNode.next;
        evenNode.next = evenNode.next.next;
        evenNode = evenNode.next;
    }

    oddNode.next = evenStart;
    return oddStart;
};
