/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this._q1 = [];
    this._q2 = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this._q1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this._q1.length>1){
        this._q2.push(this._q1.shift());
    }
    
    const data = this._q1.shift();
    
    while(this._q2.length){
        this._q1.push(this._q2.shift());
    }
    
    return data;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    while(this._q1.length>1){
        this._q2.push(this._q1.shift());
    }
    
    const data = this._q1.shift();
    
    while(this._q2.length){
        this._q1.push(this._q2.shift());
    }
    this._q1.push(data);
    
    return data;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this._q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */