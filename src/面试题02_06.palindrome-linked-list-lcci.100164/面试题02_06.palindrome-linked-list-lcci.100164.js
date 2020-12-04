/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }
    let left = 0;
    let right = list.length - 1;
    while (left < right) {
        if (list[left++] !== list[right--]) {
            return false;
        }
    }
    return true;
};
