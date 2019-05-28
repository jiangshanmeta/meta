/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 这题是第2题的变形

// 参考第二题 翻转后的合并
function add2(l1, l2){
    let head1 = l1;
    let head2 = l2;
    let add = 0;
    let before = l1;
    while(head1 && head2){
        let sum = head1.val + head2.val + add;
        head1.val = sum%10;
        add = (sum-head1.val)/10;
        before = head1;
        head1 = head1.next;
        head2 = head2.next;
    }
    if(head1){
        if(add){
            before.next = add2(head1,new ListNode(add));
        }
    }else if(head2){
        if(add){
            before.next = add2(head2,new ListNode(add));
        }else{
            before.next = head2;
        }
    }else if(add){
        before.next = new ListNode(add);
    }
    return l1;
}


var addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode();
    // 两个链表翻转
    while(l1){
        const tmp = l1.next;
        l1.next = dummyHead.next;
        dummyHead.next = l1;
        l1 = tmp;
    }
    l1 = dummyHead.next;
    dummyHead.next = null;
    
    while(l2){
        const tmp = l2.next;
        l2.next = dummyHead.next;
        dummyHead.next = l2;
        l2 = tmp;
    }
    
    l2 = dummyHead.next;
    dummyHead.next = null;
    
    let node = add2(l1,l2);
    // 加完后再翻转回来
    while(node){
        const tmp = node.next;
        node.next = dummyHead.next;
        dummyHead.next = node;
        node = tmp;
    }
    return dummyHead.next;
};