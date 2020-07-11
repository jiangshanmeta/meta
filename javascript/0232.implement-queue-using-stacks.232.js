/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this._stack = [];
    this._helper = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this._stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this._stack.length>1){
        this._helper.push(this._stack.pop());
    }
    
    const data = this._stack.pop();
    while(this._helper.length){
        this._stack.push(this._helper.pop())
    }
    return data;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while(this._stack.length>1){
        this._helper.push(this._stack.pop());
    }
    const data = this._stack[0];
    
    while(this._helper.length){
        this._stack.push(this._helper.pop())
    }
    
    return data;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this._stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */