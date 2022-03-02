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
var mergeNodes = function (head) {
    let prev = head;
    let current = head.next;
    while (current) {
        let sum = 0;
        while (current && current.val !== 0) {
            sum += current.val;
            current = current.next;
        }
        if (sum !== 0) {
            prev.next = new ListNode(sum);
            prev = prev.next;
        }
        while (current && current.val === 0) {
            current = current.next;
        }
    }
    return head.next;
};
