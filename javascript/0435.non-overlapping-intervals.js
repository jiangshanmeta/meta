/**
 * @param {number[][]} intervals
 * @return {number}
 */
// dp解 时间复杂度O(N^2)
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length === 0){
        return 0;
    }
    // 按照其实位置排序
    intervals.sort((a,b)=>a[0]-b[0]);
    // dp[i] 以第i个为结尾 最多保留几个
    const dp = new Array(intervals.length).fill(1);
    for(let i=1;i<intervals.length;i++){
        for(let j=0;j<i;j++){
            // 前面的结尾不能大于当前的开始
            if(intervals[j][1]<=intervals[i][0]){
                dp[i] = Math.max(dp[i],dp[j]+1);
            }
        }
    }
    return intervals.length-Math.max(...dp);
};


// 贪心实现 然而不是很理解
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length===0){
        return 0;
    }
    // 按照区间结尾排序
    intervals.sort((a,b)=>{
        if(a[1] !== b[1]){
            return a[1]-b[1];
        }
        return a[0]-b[0];
    });
    
    let result = 1;
    let preIndex = 0;
    for(let i=1;i<intervals.length;i++){
        // 每次选择结尾最早的(排序保证) 且 和前面选择区间不重叠的区间
        if(intervals[i][0]>=intervals[preIndex][1]){
            result++;
            preIndex = i;
        }
    }
    return intervals.length-result;
};