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
// 这题虽然是easy 其实有点意思
// 首先要做的是找到两个起点到终点的距离，然后调整两个起点为到终点距离一致
// 然后两个指针同时后移进行比对
// 时间复杂度O(n) 空间复杂度O(1)
var getDepth = function(listNode){
    let depth = 0;
    while(listNode){
        depth++;
        listNode = listNode.next;
    }
    return depth
}

var getIntersectionNode = function(headA, headB) {
    // 获得距离
    let depthA = getDepth(headA);
    let depthB = getDepth(headB);
    // 调整起点,使到终点距离一致
    while(depthA>depthB){
        headA = headA.next;
        depthA--;
    }
    
    while(depthA<depthB){
        depthB--;
        headB = headB.next;
    }
    // 同时后移进行比对
    while(headA){
        if(headA === headB){
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;
    
};