/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if(head === null){
        return head;
    }
    let node = head;
    // 复制对应节点，并且插在原来对应节点的后面
    while(node){
        const newNode = new RandomListNode(node.label);
        newNode.next = node.next;
        node.next = newNode;
        
        node = node.next.next;
    }
    
    node = head;
    // 处理random指针，考虑到的原来节点和复制节点的关系
    // 复制节点random = 原来节点random的next(如果有random的话)
    while(node){
        if(node.random !== null){
            node.next.random = node.random.next;
        }
        node = node.next.next;
    }
    
    const head2 = head.next;
    node = head;
    let node2 = head2;
    // 恢复原状，拆分成两个链表
    while(node2){
        node.next = node.next.next;
        node = node.next;
        if(node){
            node2.next = node2.next.next;
        }
        node2 = node2.next;
    }
    
    return head2;
};