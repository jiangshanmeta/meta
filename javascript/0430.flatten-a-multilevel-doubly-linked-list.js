/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let node = head;
    let stack = [];
    while(node !== null){
        // 有子节点的情况
        if(node.child !== null){
            const nextNode = node.next;
            const child = node.child;
            node.child = null;
            node.next = child;
            child.prev = node;
            nextNode && stack.push(nextNode);
        }else if(node.next === null && stack.length){
            // 没有后续节点,采用stack中的节点作为后续节点
            const nextNode = stack.pop();
            nextNode.prev = node;
            node.next = nextNode;
        }
            
        node = node.next;
    }
    return head;
};