var SortedStack = function () {
    this.heap = [];
};

function swap (arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
    this.heap.push(val);
    let index = this.heap.length - 1;
    while (index > 0) {
        const parent = (index - 1) >> 1;
        if (this.heap[parent] > this.heap[index]) {
            swap(this.heap, index, parent);
            index = parent;
        } else {
            break;
        }
    }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let index = 0;
    while (2 * index + 1 < this.heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < this.heap.length && this.heap[child + 1] < this.heap[child]) {
            child++;
        }
        if (this.heap[index] > this.heap[child]) {
            swap(this.heap, index, child);
            index = child;
        } else {
            break;
        }
    }
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
    if (this.heap.length === 0) {
        return -1;
    }
    return this.heap[0];
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
    return this.heap.length === 0;
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
