/**
 * Initialize your data structure here.
 */
// 除留余数法
var MyHashMap = function () {
    this.keyList = new Array(512);
    this.valueList = new Array(512);
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    const hash = key % 503;
    const keyList = this.keyList[hash] || (this.keyList[hash] = []);
    const valueList = this.valueList[hash] || (this.valueList[hash] = []);
    for (let i = 0; i < keyList.length; i++) {
        if (keyList[i] === key) {
            valueList[i] = value;
            return;
        }
    }
    keyList.push(key);
    valueList.push(value);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const hash = key % 503;
    if (!this.keyList[hash]) {
        return -1;
    }
    const keyList = this.keyList[hash];
    const valueList = this.valueList[hash];
    for (let i = 0; i < keyList.length; i++) {
        if (keyList[i] === key) {
            return valueList[i];
        }
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    const hash = key % 503;
    if (!this.keyList[hash]) {
        return;
    }
    const keyList = this.keyList[hash];
    const valueList = this.valueList[hash];
    for (let i = 0; i < keyList.length; i++) {
        if (keyList[i] === key) {
            keyList.splice(i, 1);
            valueList.splice(i, 1);
            return;
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
