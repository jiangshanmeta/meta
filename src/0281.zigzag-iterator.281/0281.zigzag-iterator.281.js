/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator (v1, v2) {
    this.index1 = 0;
    this.index2 = 0;
    this.v1 = v1;
    this.v2 = v2;
    this.isFirst = this.v1.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext () {
    return this.index1 < this.v1.length || this.index2 < this.v2.length;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next () {
    if (this.isFirst) {
        const data = this.v1[this.index1++];
        if (this.index2 < this.v2.length) {
            this.isFirst = false;
        }
        return data;
    } else {
        const data = this.v2[this.index2++];
        if (this.index1 < this.v1.length) {
            this.isFirst = true;
        }
        return data;
    }
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
