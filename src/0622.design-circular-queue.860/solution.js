/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    // 初始化为定长数组 start end指向第一个和最后一个有效元素
    // size可以计算得到，这里用一个变量缓存
    // 核心就是start和end两个指针移动
    this.arr = new Array(k);
    this.start = -1;
    this.end = -1;
    this.size = 0;
    this.max = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) {
        return false;
    }
    if (this.start === -1) {
        this.start = 0;
    }
    this.end++;
    if (this.end === this.arr.length) {
        this.end = 0;
    }
    this.arr[this.end] = value;
    this.size++;
    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false;
    }
    this.size--;
    if (this.start === this.end) {
        this.start = -1;
        this.end = -1;
        return true;
    }
    this.start++;
    if (this.start === this.arr.length) {
        this.start = 0;
    }
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) {
        return -1;
    }
    return this.arr[this.start];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) {
        return -1;
    }
    return this.arr[this.end];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.size === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.size === this.max;
};
