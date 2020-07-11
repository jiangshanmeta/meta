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
var swapPairs = function(head) {
    const dummyHead = new ListNode();
    dummyHead.next = head;
    let prev = dummyHead;
    while(head !== null && head.next !== null){
        // 指针指来指去，链表题目的基本操作
        const next = head.next;
        head.next = next.next;
        next.next = head;
        prev.next = next;
        
        prev = head;
        head = head.next;
    }
    
    return dummyHead.next;
};