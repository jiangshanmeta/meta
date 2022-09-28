/**
 * initialize your data structure here.
 */
var MaxStack = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
    this.stack1.push(x);
    if (this.stack2.length === 0 || x >= this.stack2[this.stack2.length - 1]) {
        this.stack2.push(x);
    } else {
        this.stack2.push(this.stack2[this.stack2.length - 1]);
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
    this.stack2.pop();
    return this.stack1.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
    return this.stack2[this.stack2.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
    const data = this.stack2[this.stack2.length - 1];
    const tmp = [];
    while (this.stack1[this.stack1.length - 1] !== data) {
        tmp.push(this.stack1.pop());
        this.stack2.pop();
    }
    this.stack1.pop();
    this.stack2.pop();
    while (tmp.length) {
        this.push(tmp.pop());
    }

    return data;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
