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
// 翻转链表的基本操作而已
var reverseList = function(head) {
    const dummyHead = new ListNode();

    var curNode = head;
    var nextNode
    
    while(curNode){
        nextNode = curNode.next;
        curNode.next = dummyHead.next;
        dummyHead.next = curNode;
        
        curNode =  nextNode;
    }
    

    return dummyHead.next;
};