/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    // 每一个interval需要和其他interval的start比较 根据start排序
    const starts = intervals.map((interval,index)=>{
        return {index,start:interval.start}
    }).sort((a,b)=>a.start-b.start);

    // 在排好序的数组中二分查找 找的是满足 start>target的值中最小的对应索引
    function binarySearch(target){
        let rightVal = Infinity;
        let index = -1;
        let start = 0;
        let end = starts.length-1;
        while(start<=end){
            const mid = (start+end) >> 1;
            if(starts[mid].start === target){
                return starts[mid].index;
            }else if(starts[mid].start>target){
                end = mid-1;
                if(starts[mid].start<rightVal){
                    rightVal = starts[mid].start;
                    index = starts[mid].index;
                }
                    
            }else{
                start = mid+1;
            }
        }
        return index;
    }
    const result = [];
    for(let i=0;i<intervals.length;i++){
        result[i] = binarySearch(intervals[i].end);
    }
    return result;
}