/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this._stack = [];
    this._min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this._stack.push(x);
    if (this._min.length === 0 || this._min[this._min.length - 1] >= x) {
        this._min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const data = this._stack.pop();
    if (this._min[this._min.length - 1] === data) {
        this._min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this._stack[this._stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this._min[this._min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
