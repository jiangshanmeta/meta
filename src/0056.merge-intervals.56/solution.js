/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    // 按照start排序
    intervals.sort((a, b) => a.start - b.start);
    const result = [];
    let index = 0;
    while (index < intervals.length) {
        const startVal = intervals[index].start;
        let endVal = intervals[index].end;
        index++;
        // 看能否合并 更新endVal
        while (index < intervals.length && intervals[index].start <= endVal) {
            endVal = Math.max(endVal, intervals[index].end);
            index++;
        }
        result.push(new Interval(startVal, endVal));
    }
    return result;
};
