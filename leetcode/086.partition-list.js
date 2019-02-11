/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// 拆分链表
var partition = function(head, x) {
    if(!head){
        return head;
    }
    let lessStart = {};
    let lastLess = lessStart;
    let greaterStart = {};
    let lastGreater = greaterStart;
    
    while(head){
        if(head.val<x){
            lastLess.next = head;
            lastLess = head;
            head = head.next;
            lastLess.next = null;
        }else{
            lastGreater.next = head;
            lastGreater = head;
            head = head.next;
            lastGreater.next = null;
        }
        
    }
    
    lastLess.next = greaterStart.next;
    return lessStart.next;
};