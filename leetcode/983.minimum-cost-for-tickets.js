/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
// 动态规划
var mincostTickets = function(days, costs) {
    const dp = new Array(366).fill(Infinity);
    dp[0] = 0;
    let endIndex = 0;
    for(let i=1;i<366;i++){
        // endIndex 对应的是days中第一个>i的索引
        // 即 days[endIndex-1] 对应<=i的最近的一个日期
        // 由此判断1天 7天 30天内是否需要出差
        while(endIndex<days.length && days[endIndex]<=i){
            endIndex++;
        }
        if(endIndex>0){
            dp[i] = Math.min(dp[i],dp[i-1]+(days[endIndex-1]>i-1?costs[0]:0)   );
            dp[i] = Math.min(dp[i],dp[Math.max(i-7,0)]+(days[endIndex-1]>i-7?costs[1]:0));
            dp[i] = Math.min(dp[i],dp[Math.max(i-30,0)]+(days[endIndex-1]>i-30?costs[2]:0));
        }else{
            // i即以前都不需要出差 所以当然是0
            dp[i] = 0;
        }
    }
    
    return dp[365];
};