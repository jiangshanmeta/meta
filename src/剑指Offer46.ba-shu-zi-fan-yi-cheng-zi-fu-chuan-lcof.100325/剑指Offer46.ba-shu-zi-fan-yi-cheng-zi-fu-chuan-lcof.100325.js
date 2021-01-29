/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    const str = num.toString();
    const dp = new Array(str.length).fill(0);
    dp[0] = 1;
    for(let i=1;i<str.length;i++){
        dp[i] += dp[i-1];
        if(i>0 && str[i-1] !== '0' && (+str.slice(i-1,i+1))<26 ){
            dp[i] += (i>1?dp[i-2]:1);
        }
    }
    return dp[dp.length-1]
};