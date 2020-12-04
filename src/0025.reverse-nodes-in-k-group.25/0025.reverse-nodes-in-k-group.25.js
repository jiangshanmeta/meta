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
var reverseKGroup = function (head, k) {
    const dummyHead = new ListNode();
    let newListEnd = dummyHead;

    let start = head;
    while (start !== null) {
        let count = 1;
        let end = start;
        // 数出k个节点来
        while (count < k && end.next !== null) {
            count++;
            end = end.next;
        }
        // 不够k个节点的情况
        if (count < k) {
            newListEnd.next = start;
            break;
        }

        // 截取这k个节点
        const nextStart = end.next;
        end.next = null;

        // reverse
        let node = start;
        while (node !== null) {
            const next = node.next;
            node.next = newListEnd.next;
            newListEnd.next = node;
            node = next;
        }
        newListEnd = start;
        start = nextStart;
    }

    return dummyHead.next;
};
