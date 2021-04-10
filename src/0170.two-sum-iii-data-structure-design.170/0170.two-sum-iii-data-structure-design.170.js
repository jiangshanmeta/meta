/**
 * Initialize your data structure here.
 */
var TwoSum = function () {
    this.map = {};
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
    if (!this.map[number]) {
        this.map[number] = 1;
    } else {
        this.map[number]++;
    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
    const keys = Object.keys(this.map);
    for (let i = 0; i < keys.length; i++) {
        const rest = value - keys[i];
        if (!this.map[rest]) {
            continue;
        }
        if (rest === +keys[i]) {
            if (this.map[rest] > 1) {
                return true;
            }
        } else {
            return true;
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
