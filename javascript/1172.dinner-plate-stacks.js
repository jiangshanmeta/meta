/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
    this.capacity = capacity;
    // counts[i] 第i个stack用了几个 
    this.counts = [];
    // 只有一个数组存放所有数据
    this.allstack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
    const capacity = this.capacity;
    // 找到第一个可用的stack
    let fitStackIndex = -1;
    const counts = this.counts;
    for(let i=0;i<counts.length;i++){
        if(counts[i]<capacity){
            fitStackIndex = i;
            break;
        }
    }
    if(fitStackIndex === -1){
        fitStackIndex = counts.length;
    }
    
    counts[fitStackIndex] = (counts[fitStackIndex] || 0)+1;
    this.allstack[capacity*fitStackIndex+counts[fitStackIndex]-1] = val;
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
    const counts = this.counts;
    if(counts.length === 0){
        return -1;
    }
    const index = this.capacity*(counts.length-1)+counts[counts.length-1]-1;
    counts[counts.length-1]--;
    while(counts.length && counts[counts.length-1] === 0){
        counts.pop();
    }
    return this.allstack[index];
};

/** 
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
    const counts = this.counts;
    if(index>=counts.length || counts[index] === 0){
        return -1;
    }
    const indexInAllstack = this.capacity*index+counts[index]-1;
    counts[index]--;
    if(index === counts.length-1){
        while(counts.length && counts[counts.length-1] === 0){
            counts.pop();
        }
    }
    return this.allstack[indexInAllstack]
};

/** 
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */