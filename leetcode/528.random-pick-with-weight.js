/**
 * @param {number[]} w
 */
var Solution = function(w) {
    const list = new Array(w.length);
    // 转换为在 [0,sum)抽元素 这样可以用系统API了
    let sum = 0;
    for(let i=0;i<w.length;i++){
        sum += w[i];
        list[i] = sum;
    }
    this.sum = sum;
    this.list = list;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const value = Math.floor(Math.random()*this.sum);
    let index = this.list.length;
    let low = 0;
    let high = this.list.length-1;
    while(low<=high){
        const mid = (low+high) >> 1;
        if(this.list[mid]>value){
            index = Math.min(index,mid);
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return index;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */