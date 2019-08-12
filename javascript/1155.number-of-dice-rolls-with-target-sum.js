/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
// F(d,f,target) = ∑F(d-1,f,target-i) i∈[1,f]
var numRollsToTarget = function(d, f, target) {
    const mod = 10**9+7;
    if(target>d*f || target<d){
        return 0;
    }
    const dp = new Array(target+1).fill(0);
    for(let i=1;i<Math.min(f+1,target+1);i++){
        dp[i] = 1;
    }
    // i代表第几个骰子 j代表这个骰子所能覆盖的范围
    // 只用了一个数组，注意边界
    for(let i=2;i<d+1;i++){
        for(let j=Math.min(target,i*f);j>i-1;j--){
            // dp[j] = 0 是因为重用了dp数组，上一次dp可能有值但不需要
            dp[j] = 0;
            // i-1也是因为边界 上一次dp i-1之前的数据都无效
            for(let k=Math.max(i-1,j-f);k<j;k++){
                dp[j] = (dp[j]+dp[k])%mod;
            }
        }
    }
    
    return dp[target];
};