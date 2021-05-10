/**
 * @param {number} n
 */
var SeatManager = function (n) {
    const heap = new Array(n);
    for (let i = 0; i < heap.length; i++) {
        heap[i] = i + 1;
    }
    this.heap = heap;
};
/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
    const result = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let index = 0;
    while (2 * index + 1 < this.heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < this.heap.length && this.heap[child + 1] < this.heap[child]) {
            child++;
        }
        if (this.heap[child] < this.heap[index]) {
            swap(this.heap, index, child);
            index = child;
        } else {
            break;
        }
    }
    return result;
};

function swap (arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
    this.heap.push(seatNumber);
    let index = this.heap.length - 1;
    while (index > 0) {
        const parent = ((index + 1) >> 1) - 1;
        if (this.heap[parent] > this.heap[index]) {
            swap(this.heap, index, parent);
            index = parent;
        } else {
            break;
        }
    }
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
