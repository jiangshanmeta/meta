/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.restSize = maxSize;
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.restSize === 0){
        return;
    }
    this.stack.push(x);
    this.restSize--;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.stack.length === 0){
        return -1;
    }
    this.restSize++;
    return this.stack.pop();
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    k = Math.min(k,this.stack.length);
    for(let i=0;i<k;i++){
        this.stack[i] += val;
    }
};
