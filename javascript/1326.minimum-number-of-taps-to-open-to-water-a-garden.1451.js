/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
// DP实现
var minTaps = function(n, ranges) {
    // 处理成区间形式
    const rangeList = ranges.map((item,index)=>[Math.max(0,index-item),Math.min(n,index+item)]).sort((a,b)=>a[0]-b[0]);
    // dp[i]表示 要覆盖[0,rangeList[i][1]]这个区间 至少需要多少个
    // 初始化为ranges.length+1一个不可能达到的最大值
    const dp = new Array(ranges.length).fill(ranges.length+1);

    for(let i=0;i<dp.length;i++){
        if(rangeList[i][0] === 0){
            dp[i] = 1;
        }else{
            for(let j=i-1;j>-1;j--){
                if(rangeList[j][1]<rangeList[i][0] || dp[j] === ranges.length+1){
                    continue;
                }
                dp[i] = Math.min(dp[i],dp[j]+1);
            }
        }
    }

    let result = ranges.length+1;
    for(let i=0;i<ranges.length;i++){
        if(rangeList[i][1] === n && dp[i]<result){
            result = dp[i];
        }
    }
    return result === ranges.length+1?-1:result;
};