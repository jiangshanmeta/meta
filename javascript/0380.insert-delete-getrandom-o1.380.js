/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    // list存的元素 方便后面random
    // map的key是list的值 value是在list中的索引
    this.list = [];
    this.map = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map[val] !== undefined) {
        return false;
    }
    this.map[val] = this.list.length;
    this.list.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map[val] === undefined) {
        return false;
    }
    const index = this.map[val];
    // 关键点在这里 要删除一个元素 list中对应元素要删掉 那list中后面的元素怎么办？
    // 最省事的办法是把最后一个元素搬到index所在位置
    if (index !== this.list.length - 1) {
        const lastVal = this.list[this.list.length - 1];
        this.map[lastVal] = index;
        this.list[index] = lastVal;
    }
    this.map[val] = undefined;
    this.list.pop();
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.list[Math.floor(Math.random() * this.list.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
