/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head === null || head.next === null){
        return head;
    }
    // 利用快慢指针找到中点
    let prev;
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    // 后半段链表翻转
    prev.next = null;
    const dummyHead = new ListNode();
    while(slow){
        const tmp = slow.next;
        slow.next = dummyHead.next;
        dummyHead.next = slow;
        slow = tmp;
    }
    // 前半段链表和翻转后的后半段链表合并
    let head2 = dummyHead.next;
    while(head){
        prev = head2;
        const tmp = head2.next;
        head2.next = head.next;
        head.next = head2;
        head = head2.next;
        head2 = tmp;
    }
    // 处理总数为奇数个节点 后半段多一个节点
    if(head2){
        prev.next = head2;
    }
    
};