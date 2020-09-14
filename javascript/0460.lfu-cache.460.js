function LinkedListNode (key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
    this.frequency = 1;
}

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    // 最旧的节点在前面 最新的节点在后面
    this.head = new LinkedListNode();
    this.head.frequency = 0;
    this.tail = new LinkedListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;
    // key为频次 value为该频次下的最后一个节点
    this.frequencyMap = {};
    this.keyNodeMap = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    const node = this.keyNodeMap[key];
    if (!node) {
        return -1;
    }
    this.updateFrequency(node);

    return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    const node = this.keyNodeMap[key];
    if (node) {
        node.value = value;
        this.updateFrequency(node);
    } else {
        if (this.capacity === 0) {
            const removedNode = this.head.next;
            // 竟然有capacity为0的case
            if (removedNode === this.tail) {
                return;
            }
            this.keyNodeMap[removedNode.key] = null;
            if (this.frequencyMap[removedNode.frequency] === removedNode) {
                this.frequencyMap[removedNode.frequency] = null;
            }
            this.removeNode(removedNode);
        } else {
            this.capacity--;
        }
        const node = new LinkedListNode(key, value);
        if (this.frequencyMap[1]) {
            this.insertAfter(this.frequencyMap[1], node);
        } else {
            this.insertAfter(this.head, node);
        }
        this.frequencyMap[1] = node;
        this.keyNodeMap[key] = node;
    }
};

LFUCache.prototype.removeNode = function (node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    node.prev = null;
    node.next = null;
};

LFUCache.prototype.insertAfter = function (prev, node) {
    const next = prev.next;
    node.prev = prev;
    node.next = next;
    prev.next = node;
    next.prev = node;
};

LFUCache.prototype.updateFrequency = function (node) {
    const oldFrequency = node.frequency;
    const isTail = this.frequencyMap[oldFrequency] === node;
    if (isTail) {
        if (node.prev.frequency === oldFrequency) {
            this.frequencyMap[oldFrequency] = node.prev;
        } else {
            this.frequencyMap[oldFrequency] = null;
        }
    }
    node.frequency++;

    if (isTail && !this.frequencyMap[node.frequency]) {
        this.frequencyMap[node.frequency] = node;
        return;
    }

    this.removeNode(node);
    if (this.frequencyMap[node.frequency]) {
        this.insertAfter(this.frequencyMap[node.frequency], node);
    } else {
        this.insertAfter(this.frequencyMap[oldFrequency], node);
    }
    this.frequencyMap[node.frequency] = node;
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
