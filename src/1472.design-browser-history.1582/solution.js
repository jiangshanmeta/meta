/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.stack = [
        homepage,
    ];
    this.index = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    while (this.stack.length - 1 > this.index) {
        this.stack.pop();
    }
    this.stack.push(url);
    this.index++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    this.index = Math.max(this.index - steps, 0);
    return this.stack[this.index];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    this.index = Math.min(this.index + steps, this.stack.length - 1);
    return this.stack[this.index];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
