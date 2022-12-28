/**
 * @param {number} n
 */
var Allocator = function (n) {
    this.memory = new Array(n).fill(0);
};

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function (size, mID) {
    let index = 0;
    while (index + size - 1 < this.memory.length) {
        let match = true;
        for (let i = index; i < index + size; i++) {
            if (this.memory[i] !== 0) {
                match = false;
                index = i + 1;
                break;
            }
        }
        if (match) {
            for (let i = index; i < index + size; i++) {
                this.memory[i] = mID;
            }
            return index;
        }
    }
    return -1;
};

/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.free = function (mID) {
    let result = 0;
    for (let i = 0; i < this.memory.length; i++) {
        if (this.memory[i] === mID) {
            result++;
            this.memory[i] = 0;
        }
    }
    return result;
};

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 */
