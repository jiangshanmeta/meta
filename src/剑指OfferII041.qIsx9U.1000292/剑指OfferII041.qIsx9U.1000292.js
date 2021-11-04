/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.size = size;
    this.queen = [];
    this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.queen.push(val);
    this.sum += val;
    if (this.queen.length > this.size) {
        const node = this.queen.shift();
        this.sum -= node;
    }
    return this.sum / this.queen.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
