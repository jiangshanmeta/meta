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
var deleteDuplicates = function (head) {
    const dummyHead = new ListNode();
    dummyHead.next = head;
    let prev = dummyHead;

    while (head) {
        const lastValue = head.val;
        let counter = 1;

        head = head.next;
        // 看后面是否有和自己相同的
        while (head && head.val === lastValue) {
            counter++;
            head = head.next;
        }

        // 有相同的，这些节点都去掉
        if (counter > 1) {
            prev.next = head;
        } else {
            prev = prev.next;
        }
    }

    return dummyHead.next;
};
