/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    const result = [];
    while(head){
        result.push(head.val);
        head = head.next;
    }
    return result.reverse();
};