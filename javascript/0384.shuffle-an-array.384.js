/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this._original = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this._original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    const original = this._original;
    const result = new Array(original.length);
    // Fisher–Yates shuffle
    for (let i = 0; i < original.length; i++) {
        const randomIndex = Math.random() * (i + 1) | 0;
        result[i] = result[randomIndex];
        result[randomIndex] = original[i];
    }
    return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
