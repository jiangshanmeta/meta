/**
 * Initialize your data structure here.
 */
// 整体思路和 leetcode 380 一样
var RandomizedCollection = function () {
    // list存着所有插入的元素
    this.list = [];
    // map的key是list中的元素 value是在list中的索引数组(因为允许多个)
    this.map = {};
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
    const indexList = this.map[val] || (this.map[val] = []);
    indexList.push(this.list.length);
    this.list.push(val);
    return indexList.length === 1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
    if (!this.map[val] || this.map[val].length === 0) {
        return false;
    }
    const index = this.map[val].pop();
    if (index !== this.list.length - 1) {
        const lastVal = this.list[this.list.length - 1];
        this.list[index] = lastVal;
        const indexList = this.map[lastVal];
        indexList[indexList.indexOf(this.list.length - 1)] = index;
    }
    this.list.pop();
    return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
    return this.list[Math.floor(Math.random() * this.list.length)];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
