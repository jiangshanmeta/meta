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
var deleteDuplicates = function(head) {
    if(!head){
        return head;
    }
    let lastVal = head.val;
    let prev = head;
    let node = prev.next;
    
    while(node){
        // 重复的只保留第一个
        if(node.val === lastVal){
            prev.next = node.next;
            node.next = null;
            node = prev.next;
        }else{
            // 不是重复的 更新 lastVal
            lastVal = node.val;
            prev = node;
            node = node.next;
        }
    }

    return head;
};