/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
    this.used = true;
    this.peakVal = -1;
    this.iterator = iterator;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
    if (this.used) {
        this.peakVal = this.iterator.next();
        this.used = false;
    }
    return this.peakVal;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
    if (this.used) {
        return this.iterator.next();
    }
    this.used = true;
    return this.peakVal;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
    if (this.used) {
        return this.iterator.hasNext();
    }
    return true;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
