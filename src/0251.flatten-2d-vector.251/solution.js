/**
 * @param {number[][]} vec
 */
var Vector2D = function (vec) {
    this.vec = vec;
    this.index1 = 0;
    this.index2 = 0;
    while (this.index1 < this.vec.length && this.vec[this.index1].length === 0) {
        this.index1++;
    }
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function () {
    const result = this.vec[this.index1][this.index2++];
    if (this.index2 === this.vec[this.index1].length) {
        this.index1++;
        while (this.index1 < this.vec.length && this.vec[this.index1].length === 0) {
            this.index1++;
        }
        this.index2 = 0;
    }
    return result;
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function () {
    return this.index1 < this.vec.length;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
