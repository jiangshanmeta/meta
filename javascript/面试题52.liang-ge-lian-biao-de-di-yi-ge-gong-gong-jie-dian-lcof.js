/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let depthA = getDepth(headA);
    let depthB = getDepth(headB);
    while(depthA>depthB){
        headA = headA.next;
        depthA--;
    }
    while(depthB>depthA){
        headB = headB.next;
        depthB--;
    }
    while(headA !== headB){
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};

function getDepth(head){
    let count = 0;
    while(head){
        head = head.next;
        count++;
    }
    return count;
}