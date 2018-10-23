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
    const valueIndexMap = new Map();
    let count = 0;
    while(head){
        valueIndexMap.set(head.val,count++);
        head = head.next;
    }
    
    let arr = new Array(count);
    for(let i=0;i<G.length;i++){
        arr[valueIndexMap.get(G[i])] = true;
    }
    
    count = 0;
    let lastUsed = false;
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            if(!lastUsed){
                lastUsed = true;
                count++;
            }
        }else{
            lastUsed = false;
        }
    }
    return count;
};