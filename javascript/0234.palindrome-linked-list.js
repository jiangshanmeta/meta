/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 基本做法,遍历一遍,扔数组里,然后双指针判断是否是回文
// 时间复杂度O(n) 空间复杂度O(n)
var isPalindrome = function(head) {
    const values = [];
    while(head){
        values.push(head.val);
        head = head.next;
    }
    
    let index1 = 0;
    let index2 = values.length-1;
    
    while(index1<index2){
        if(values[index1] !== values[index2]){
            return false;
        }
        index1++;
        index2--;
    }
    return true;
};



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 这个解法利用的是快慢指针
// 按照下面的写法 偶数个节点slow最终指向中间两个节点的后一个 奇数个节点slow指向中间的节点
// 所以prev.next置为null正好分割两个链表
// 然后后半段链表翻转 最后逐个比对即可
// 时间复杂度O(n) 空间复杂度O(1)
var isPalindrome = function(head) {
    if(head === null || head.next === null){
        return true;
    }
    let fast = head;
    let slow = head;
    let prev;
    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    const dummyHead = new ListNode();
    while(slow){
        const tmp = slow.next;
        slow.next = dummyHead.next;
        dummyHead.next = slow;
        slow = tmp;
    }
    let head2 = dummyHead.next;

    while(head && head2){
        if(head.val !== head2.val){
            return false;
        }
        head = head.next;
        head2 = head2.next;
    }
    
    return true;
};