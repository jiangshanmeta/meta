function ListNode(cap){
    this.value = new Array(cap);
    this.size = 0;
    this.prev = null;
    this.next = null;
}

ListNode.prototype.pop = function(){
    return this.value[--this.size];
}

ListNode.prototype.push = function(val){
    this.value[this.size++] = val;

}

ListNode.prototype.isFull = function(){
    return this.size === this.value.length;
}


/**
 * @param {number} cap
 */
var StackOfPlates = function(cap) {
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.cap = cap;
};

/** 
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function(val) {
    if(this.cap === 0){
        return;
    }

    const last = this.tail.prev;
    if(last.isFull()){
        const node = new ListNode(this.cap);
        node.push(val);
        node.next = this.tail;
        this.tail.prev = node;
        node.prev = last;
        last.next = node;
    }else{
        last.push(val);
    }

};

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function() {
    if(this.tail.prev === this.head){
        return -1;
    }
    const node = this.tail.prev;
    const value = node.pop();
    if(node.size === 0){
        const prev = node.prev;
        prev.next = this.tail;
        this.tail.prev = prev;
        node.prev = null;
        node.next = null;
    }

    return value;
};

/** 
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function(index) {
    let node = this.head.next;
    while(node !== this.tail && index){
        index--;
        node = node.next;
    }
    if(node === this.tail){
        return -1;
    }
    const value = node.pop();
    if(node.size === 0){
        const prev = node.prev;
        prev.next = node.next;
        node.next.prev = prev;
        node.prev = null;
        node.next = null;
    }
    return value;
};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */