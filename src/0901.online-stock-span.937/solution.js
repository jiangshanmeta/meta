
var StockSpanner = function () {
    this.priceStack = [];
    this.countStack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let count = 1;
    while (this.priceStack.length && this.priceStack[this.priceStack.length - 1] <= price) {
        count += this.countStack.pop();
        this.priceStack.pop();
    }
    this.priceStack.push(price);
    this.countStack.push(count);
    return count;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
