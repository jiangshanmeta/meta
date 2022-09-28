/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null || head.next === null) {
        return head;
    }
    // 先找出总数来
    let count = 0;
    let node = head;
    let prev;
    while (node !== null) {
        count++;
        prev = node;
        node = node.next;
    }
    // 处理rotate多轮的情况
    k = k % count;
    if (k === 0) {
        return head;
    }
    // 利用快慢指针找到倒数第k的节点
    let slow = head;
    let fast = head;
    while (k > 0) {
        k--;
        fast = fast.next;
    }
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    // rotate
    node = slow.next;
    slow.next = null;
    prev.next = head;

    return node;
};
