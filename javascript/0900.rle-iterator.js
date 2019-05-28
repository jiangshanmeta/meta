/**
 * @param {number[]} A
 */
var RLEIterator = function(A) {
    this.list = A;
    this.index = 0;
};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
    if(this.index === this.list.length){
        return -1;
    }
    
    while(this.index<this.list.length){
        // 处理数量为0的情况
        if(this.list[this.index] === 0){
            this.index += 2;
            continue;
        }
        
        if(this.list[this.index] >= n){
            this.list[this.index] -= n;
            return this.list[this.index+1];
        }
        
        n -= this.list[this.index];
        this.index += 2;
    }
    return -1;
};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */