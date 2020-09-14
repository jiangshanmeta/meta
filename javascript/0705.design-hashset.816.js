/**
 * Initialize your data structure here.
 */
// 除留余数法
var MyHashSet = function () {
    this.list = new Array(512);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    const hash = key % 503;
    const list = this.list[hash] || (this.list[hash] = []);
    for (let i = 0; i < list.length; i++) {
        if (list[i] === key) {
            return;
        }
    }
    list.push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    const hash = key % 503;
    const list = this.list[hash];
    if (!list) {
        return;
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i] === key) {
            list.splice(i, 1);
            return;
        }
    }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    const hash = key % 503;
    const list = this.list[hash];
    if (!list) {
        return false;
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i] === key) {
            return true;
        }
    }
    return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
