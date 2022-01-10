/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    const nodes = [];
    while (head) {
        nodes.push(head.val);
        head = head.next;
    }
    let result = -Infinity;
    let left = 0;
    let right = nodes.length - 1;
    while (left < right) {
        result = Math.max(result, nodes[left++] + nodes[right--]);
    }
    return result;
};
