
var RecentCounter = function() {
    this.sequence = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.sequence.push(t);
    // 把时间过小的去掉
    while(this.sequence[0]<t-3000){
        this.sequence.shift();
    }
    return this.sequence.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */