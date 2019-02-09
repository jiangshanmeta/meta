/**
 * Initialize your data structure here.
 */

function Node(val){
    this.val = val;
    this.next = null;
}


var MyLinkedList = function() {
    this.head = new Node();
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index<0 || index > this.length-1){
        return -1;
    }
    
    let count = 0;
    let node = this.head.next;
    while(count<index){
        count++;
        node = node.next;
    }
    return node.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const prev = this.head;
    const node = new Node(val);
    node.next = prev.next;
    prev.next = node;
    this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let count = 0;
    let prev = this.head;
    while(count<this.length){
        count++;
        prev = prev.next;
    }
    const node = new Node(val);
    prev.next = node;
    this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index>this.length){
        return;
    }
    
    let count = 0;
    let prev = this.head;
    while(count<index){
        count++;
        prev = prev.next;
    }
    const node = new Node(val);
    node.next = prev.next;
    prev.next = node;
    this.length++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0 || index>this.length-1){
        return;
    }
    
    let count = 0;
    let prev = this.head;
    while(count<index){
        count++;
        prev = prev.next;
    }
    const cur = prev.next;
    prev.next = cur.next;
    // cur.next = null;
    this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */