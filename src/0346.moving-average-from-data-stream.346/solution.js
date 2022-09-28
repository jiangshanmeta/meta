/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.sequence = [];
    this.size = size;
    this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.sequence.push(val);
    this.sum += val;
    if (this.sequence.length > this.size) {
        this.sum -= this.sequence[this.sequence.length - this.size - 1];
    }

    const size = Math.min(this.size, this.sequence.length);
    const result = this.sum / size;

    return result;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
