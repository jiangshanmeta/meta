/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack1.push(x);
    if (this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= x) {
        this.stack2.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const node = this.stack1.pop();
    if (node === this.stack2[this.stack2.length - 1]) {
        this.stack2.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.stack2[this.stack2.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
