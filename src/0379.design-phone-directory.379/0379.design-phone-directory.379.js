/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
    const sequence = [];
    for (let i = maxNumbers - 1; i > -1; i--) {
        sequence.push(i);
    }
    this.sequence = sequence;
    this.inUseSet = new Set();
};

/**
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
    if (this.sequence.length === 0) {
        return -1;
    }
    const result = this.sequence.pop();
    this.inUseSet.add(result);

    return result;
};

/**
 * Check if a number is available or not.
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
    return !this.inUseSet.has(number);
};

/**
 * Recycle or release a number.
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
    if (this.inUseSet.has(number)) {
        this.inUseSet.delete(number);
        this.sequence.push(number);
    }
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
