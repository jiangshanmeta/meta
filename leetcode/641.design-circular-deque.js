/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */

// 和622题类似，基于两个指针指向头尾
var MyCircularDeque = function(k) {
    this.arr = new Array(k);
    this.start = -1;
    this.end = -1;
    this.size = 0;
    this.max = k;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull()){
        return false;
    }
    this.size++;
    if(this.size === 1){
        this.start = 0;
        this.end = 0;
        this.arr[0] = value;
        return true;
    }
    
    this.start--;
    if(this.start === -1){
        this.start = this.max-1;
    }
    this.arr[this.start] = value;
    return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull()){
        return false;
    }
    this.size++;
    if(this.size === 1){
        this.start = 0;
        this.end = 0;
        this.arr[0] = value;
        return true;
    }
    
    this.end++;
    if(this.end === this.max){
        this.end = 0;
    }
    this.arr[this.end] = value;
    return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()){
        return false;
    }
    this.size--;
    if(this.size === 0){
        this.start = -1;
        this.end = -1;
        return true;
    }
    this.start++;
    if(this.start === this.max){
        this.start = 0;
    }
    return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()){
        return false;
    }
    this.size--;
    if(this.size === 0){
        this.start = -1;
        this.end = -1;
        return true;
    }
    this.end--;
    if(this.end === -1){
        this.end = this.max-1;
    }
    return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()){
        return -1;
    }
    return this.arr[this.start];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty()){
        return -1;
    }
    return this.arr[this.end];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.size === this.max;
};