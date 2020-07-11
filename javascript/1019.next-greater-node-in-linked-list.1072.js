/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 类似于leetcode 496
var nextLargerNodes = function(head) {
    const result = [];
    const valueStack = [];
    const indexStack = [];
    let index = 0;
    while(head){
        const value = head.val;
        head = head.next;
        while(valueStack.length && value>valueStack[valueStack.length-1]){
            valueStack.pop();
            result[indexStack.pop()] = value;
        }
        valueStack.push(value);
        result[index] = 0;
        indexStack.push(index++);
    }
    
    return result;
};