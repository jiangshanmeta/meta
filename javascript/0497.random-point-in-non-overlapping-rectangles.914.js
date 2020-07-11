/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    let totalCount = 0;
    const countList = [];
    for(let i=0;i<rects.length;i++){
        // 计算每个区域有多少个点 ， pick就是在这些点里选
        totalCount += (rects[i][2]-rects[i][0]+1)*(rects[i][3]-rects[i][1]+1);
        countList.push(totalCount);
    }
    this.rects = rects;
    this.countList = countList;
    this.totalCount = totalCount;
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    const rand = Math.floor(Math.random()*this.totalCount);
    let index = this.countList.length-1;
    let low = 0;
    let high = this.countList.length-1;
    while(low<=high){
        const mid = (low+high) >> 1;
        if(rand<this.countList[mid]){
            index = Math.min(index,mid);
            high = mid-1;
        }else{
            low = mid+1;
        }
    }

    const rect = this.rects[index];
    const perLine = rect[2]-rect[0]+1;
    const count = rand-(index>0?this.countList[index-1]:0);

    const b = count%perLine;
    const a= (count-b)/perLine;

    return [
        rect[0]+b,
        rect[1]+a
    ];
};