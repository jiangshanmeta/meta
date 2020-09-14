/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
    this._map = {};
};

function binarySearch (list, timestamp) {
    let low = 0;
    let high = list.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = (low + high) >> 1;
        if (list[mid].timestamp <= timestamp) {
            low = mid + 1;
            result = Math.max(result, mid);
        } else {
            high = mid - 1;
        }
    }
    return result;
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (this._map[key] === undefined) {
        this._map[key] = [];
    }
    const list = this._map[key];
    const index = binarySearch(list, timestamp);
    list.splice(index + 1, 0, {
        value,
        timestamp,
    });
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (this._map[key] === undefined) {
        return '';
    }
    const list = this._map[key];
    const index = binarySearch(list, timestamp);
    if (index === -1) {
        return '';
    }
    return list[index].value;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = Object.create(TimeMap).createNew()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
