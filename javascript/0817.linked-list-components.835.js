/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    // 构成hash 便于查询是否有该节点
    const map = {};
    for(let i=0;i<G.length;i++){
        map[G[i]] = true;
    }
    
    // 处理开始的不在G的节点
    while(head && !map[head.val]){
        head = head.next;
    }
    
    let count = 0;
    while(head){
        count++;
        // 一组在G的节点
        while(head && map[head.val]){
            head = head.next;
        }
        // 一组不在G的节点
        while(head && !map[head.val]){
            head = head.next;
        }
    }
    
    
    return count;
};