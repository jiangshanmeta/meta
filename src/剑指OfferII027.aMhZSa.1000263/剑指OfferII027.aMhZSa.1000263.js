/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const sequence = [];
    while (head) {
        sequence.push(head.val);
        head = head.next;
    }
    let left = 0;
    let right = sequence.length - 1;
    while (left < right) {
        if (sequence[left++] !== sequence[right--]) {
            return false;
        }
    }
    return true;
};
