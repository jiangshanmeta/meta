var FrontMiddleBackQueue = function() {
    this.head = new DoubleLinkedList();
    this.tail = new DoubleLinkedList();
    this.middle = null;
    this.size = 0;
};

function DoubleLinkedList(val){
    this.val = val;
    this.prev = null;
    this.next = null;
}

function insertAfter(prev,node){
    node.next = prev.next;
    node.next.prev = node;
    prev.next = node;
    node.prev = prev;
}

FrontMiddleBackQueue.prototype.pushEmpty = function(node){
    this.head.next = node;
    node.prev = this.head;
    node.next = this.tail;
    this.tail.prev = node;
    this.middle = node;
}

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    const node = new DoubleLinkedList(val);
    const size = this.size;
    this.size++;
    if(size === 0){
        this.pushEmpty(node);
        return;
    }
    insertAfter(this.head,node);
    if(size&1){
        this.middle = this.middle.prev;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    const node = new DoubleLinkedList(val);
    const size = this.size;
    this.size++;
    if(size === 0){
        this.pushEmpty(node);
        return;
    }
    if(size&1){
        insertAfter(this.middle.prev,node)
        this.middle = this.middle.prev;
    }else{
        insertAfter(this.middle,node);
        this.middle = this.middle.next;
    }
};



/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    const node = new DoubleLinkedList(val);
    const size = this.size;
    this.size++;
    if(size === 0){
        this.pushEmpty(node);
        return;
    }
    insertAfter(this.tail.prev,node);
    if(size%2 === 0){
        this.middle = this.middle.next;
    }

};

FrontMiddleBackQueue.prototype.popEmpty = function(){
    const val = this.middle.val;
    this.middle = null;
    this.head.next = this.tail;
    this.tail.prev = this.head;
    return val;
}

function removeAfter(node){
    const next = node.next;
    node.next = next.next;
    node.next.prev = node;
    next.prev = null;
    next.next = null;
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    const size = this.size;
    if(size === 0){
        return -1;
    }
    this.size--;
    if(size === 1){
        return this.popEmpty();
    }
    const val = this.head.next.val;
    if(size%2 === 0){
        this.middle = this.middle.next;
    }

    removeAfter(this.head);
    return val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    const size = this.size;
    if(size === 0){
        return -1;
    }
    this.size--;
    if(size === 1){
        return this.popEmpty();
    }
    const val = this.middle.val;
    const prev = this.middle.prev;
    if(size&1){
        this.middle = this.middle.prev;
    }else{
        this.middle = this.middle.next;
    }
    removeAfter(prev);
    
    return val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    const size = this.size;
    if(size === 0){
        return -1;
    }
    this.size--;
    if(size === 1){
        return this.popEmpty();
    }
    const val = this.tail.prev.val;
    removeAfter(this.tail.prev.prev);
    if(size&1){
        this.middle = this.middle.prev;
    }

    return val;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */