/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 基本的链表删除元素
var removeElements = function (head, val) {
    const dummyHead = new ListNode();
    dummyHead.next = head;
    let prev = dummyHead;
    let cur = head;
    while (cur) {
        // 如果是要删的元素,把前一个节点的next指针指向下一个元素
        // 此时,前一个节点依然是前一个节点
        if (cur.val === val) {
            prev.next = cur.next;
            cur = cur.next;
        } else {
            // 不是要删的,前一个节点的指针和当前节点的指针都向后移动
            prev = prev.next;
            cur = cur.next;
        }
    }

    return dummyHead.next;
};
