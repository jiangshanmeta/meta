/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
var Solution = function(n_rows, n_cols) {
    // 考虑到 n_rows n_cols 可能到10000这个量级 其乘积过大 
    // 因此无论一维数组还是二维数组内存都会撑不住
    // 因此 x y两个分别random 再加一个缓存
    this.n_rows = n_rows;
    this.n_cols = n_cols;
    this.cache = {};
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
    while(true){
        const x = Math.floor(Math.random()*this.n_rows);
        const y = Math.floor(Math.random()*this.n_cols);
        if(!this.cache[`${x},${y}`]){
            this.cache[`${x},${y}`] = true;
            return [x,y];
        }
    }
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
    this.cache = {};
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n_rows, n_cols)
 * var param_1 = obj.flip()
 * obj.reset()
 */