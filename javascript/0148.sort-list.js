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
function mergeList(l1,l2){
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    
    if(l1.val<l2.val){
        l1.next = mergeList(l1.next,l2);
        return l1;
    }
    l2.next = mergeList(l1,l2.next);
    return l2;
}

var sortList = function(head) {
    if(!head || !head.next){
        return head;
    }
    
    // 和876一样的思路找中点
    let slow = head;
    let fast = head;
    let prev = head;
    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = null;

    // 归并排序
    return mergeList(sortList(head),sortList(slow));
};