/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.sequence = new Array(n+1);
    this.ptr = 1;
};

/** 
 * @param {number} id 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {
        this.sequence[id] = value;
        if(id !== this.ptr){
            return [];
        }
        const result = [];

        while(this.ptr<this.sequence.length && this.sequence[this.ptr] !== undefined){
            result.push(this.sequence[this.ptr++]);
        }

        return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */