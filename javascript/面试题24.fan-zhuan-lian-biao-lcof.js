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
var reverseList = function(head) {
    const dummyHead = new ListNode();
    while(head){
        const node = head;
        head = head.next;
        node.next = dummyHead.next;
        dummyHead.next = node;
    }
    return dummyHead.next;
};