// 前缀积数组
var ProductOfNumbers = function () {
    this.zeroCount = [
        0, ];
    this.prefixMulti = [
        1, ];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
    const lastZero = this.zeroCount[this.zeroCount.length - 1];
    if (num === 0) {
        this.zeroCount.push(lastZero + 1);
        this.prefixMulti.push(1);
    } else {
        const lastMulti = this.prefixMulti[this.prefixMulti.length - 1];
        this.zeroCount.push(lastZero);
        this.prefixMulti.push(lastMulti * num);
    }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
    const endIndex = this.zeroCount.length - 1;
    const startIndex = endIndex - k;
    if (this.zeroCount[startIndex] === this.zeroCount[endIndex]) {
        return this.prefixMulti[endIndex] / this.prefixMulti[startIndex];
    } else {
        return 0;
    }
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
