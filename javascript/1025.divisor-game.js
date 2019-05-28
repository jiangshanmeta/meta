/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    const dp = new Array(N+1).fill(false);
    for(let i=2;i<N+1;i++){
        for(let j=1;j<i;j++){
            if(i%j === 0 && !dp[i-j]){
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[N];
};