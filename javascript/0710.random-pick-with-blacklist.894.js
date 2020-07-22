/**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function(N, blacklist) {
    const map = blacklist.reduce((obj,item)=>{
        obj[item] = true;
        return obj;
    },{});
    this.map = map;
    this.N = N;
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
    while(true){
        const value = Math.floor(Math.random()*this.N);
        if(!this.map[value]){
            return value;
        }
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(N, blacklist)
 * var param_1 = obj.pick()
 */