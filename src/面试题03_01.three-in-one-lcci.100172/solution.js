/**
 * @param {number} stackSize
 */
var TripleInOne = function (stackSize) {
    this.stackSize = stackSize;
    this.arr = new Array(stackSize * 3);
    this.index0 = 0;
    this.index1 = stackSize;
    this.index2 = stackSize * 2;
};

/**
 * @param {number} stackNum
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function (stackNum, value) {
    const maxIndex = this.stackSize * (stackNum + 1);
    const field = `index${stackNum}`;
    if (this[field] < maxIndex) {
        this.arr[this[field]++] = value;
    }
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function (stackNum) {
    const startIndex = stackNum * this.stackSize;
    const field = `index${stackNum}`;
    if (this[field] === startIndex) {
        return -1;
    }
    return this.arr[--this[field]];
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function (stackNum) {
    const startIndex = stackNum * this.stackSize;
    const field = `index${stackNum}`;
    if (this[field] === startIndex) {
        return -1;
    }
    return this.arr[this[field] - 1];
};

/**
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function (stackNum) {
    const startIndex = stackNum * this.stackSize;
    const field = `index${stackNum}`;
    return this[field] === startIndex;
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */
