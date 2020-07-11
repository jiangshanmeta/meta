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
var removeZeroSumSublists = function(head) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    const hashMap = {};
    let prefix = 0;
    let node = dummyHead;
    while(node){
        // 两次遇到同一个prefix 中间的和为0
        prefix += node.val;
        if(!hashMap[prefix]){
            hashMap[prefix] = node;
        }
        hashMap[prefix].next = node.next;
        node = node.next;
    }
    return dummyHead.next;
};