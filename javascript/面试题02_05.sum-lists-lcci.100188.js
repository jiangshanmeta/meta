/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode();
    let node = result;
    let addon = 0;
    while(l1 && l2){
        const val = addon+l1.val+l2.val;
        const digit = val%10;
        addon = (val-digit)/10;
        node.next = new ListNode(digit);
        node = node.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while(l1){
        const val = addon+l1.val;
        const digit = val%10;
        addon = (val-digit)/10;
        node.next = new ListNode(digit);
        node = node.next;
        l1 = l1.next;
    }
    while(l2){
        const val = addon+l2.val;
        const digit = val%10;
        addon = (val-digit)/10;
        node.next = new ListNode(digit);
        node = node.next;
        l2 = l2.next;
    }
    if(addon){
        node.next = new ListNode(addon);
    }
    return result.next;
};