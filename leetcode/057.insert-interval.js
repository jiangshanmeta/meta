/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    // 其实该用二分的 然而偷个懒
    for(let i=0;i<intervals.length;i++){
        // newInterval在当前节点前面 没有交集
        if(newInterval.end<intervals[i].start){
            intervals.splice(i,0,newInterval);
            return intervals;
        }
        // newInterval 在当前节点的后面 当前没有交集
        if(newInterval.start>intervals[i].end){
            continue;
        }
        
        // 有交集的情况

        // 更新 start
        intervals[i].start = Math.min(intervals[i].start,newInterval.start);
        let end = Math.max(intervals[i].end,newInterval.end);
        // 和后面的interval合并
        let index = i+1;
        while(index<intervals.length && intervals[index].start<=end){
            end = Math.max(end,intervals[index].end);
            index++;
        }
        intervals[i].end = end;
        intervals.splice(i+1,index-i-1);
        return intervals;
    }
    // newInterval.start 最大的end还大 插入到最后
    intervals.push(newInterval);
    return intervals;
};