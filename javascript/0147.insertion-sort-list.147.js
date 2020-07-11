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
// 插入排序而已
var insertionSortList = function(head) {
    const dummyHead = new ListNode();
    while(head !== null){
        const next = head.next;
        
        let prev = dummyHead;
        let cur = prev.next;
        while(cur !== null && cur.val<head.val){
            prev = cur;
            cur = cur.next;
        }
        head.next = prev.next;
        prev.next = head;
        
        head = next;
    }
    
    return dummyHead.next;
};