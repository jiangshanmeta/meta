/**
 * initialize your data structure here.
 */
// 这个实现是基于二分的 官方有其他解法 要自杀了 没心情看
var MedianFinder = function() {
    this.list = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let low = 0;
    let high = this.list.length-1;
    let index = this.list.length;
    while(low<=high){
        const mid = (low+high) >> 1;
        if(this.list[mid]>num){
            index = Math.min(mid,index);
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    this.list.splice(index,0,num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const mid = this.list.length >> 1;
    if(this.list.length&1){
        return this.list[mid];
    }else{
        return (this.list[mid]+this.list[mid-1])/2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */