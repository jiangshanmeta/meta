/**
 * @param {number} capacity
 */
// 双向链表+哈希
function LinkedListNode(key,value){
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = {};
    const head = new LinkedListNode();
    const tail = new LinkedListNode();
    head.next = tail;
    tail.prev = head;
    this.head = head;
    this.tail = tail;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.cache[key];
    if(!node){
        return -1;
    }
    this.removeNode(node);
    this.insertNode(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const node = this.cache[key];
    if(node){
        node.value = value;
        this.removeNode(node);
        this.insertNode(node);
    }else{
        if(this.capacity === 0){
            const removeNode = this.tail.prev;
            this.cache[removeNode.key] = null;
            this.removeNode(removeNode); 
        }else{
            this.capacity--;
        }
        const newNode = new LinkedListNode(key,value) 
        this.insertNode(newNode);
        this.cache[key] = newNode;
    }
};


LRUCache.prototype.removeNode = function(node){
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    node.prev = null;
    node.next = null;
}
// 作为头结点
LRUCache.prototype.insertNode = function(node){
    const prev = this.head;
    const next = this.head.next;
    node.next = next;
    node.prev = prev;
    next.prev = node;
    prev.next = node;
    
}