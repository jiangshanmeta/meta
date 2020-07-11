/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    const dp = [1,1];
    while(dp[dp.length-1]<k){
        dp.push(dp[dp.length-1]+dp[dp.length-2]);
    }
    let result = 0;
    let index = dp.length-1;
    while(k>0){
        // 找到≤k的最大的斐波那契数
        while(dp[index]>k){
            index--;
        }
        result++;
        k -= dp[index];
    }
    return result;
};