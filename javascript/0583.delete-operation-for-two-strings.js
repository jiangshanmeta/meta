/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 参考 1143. Longest Common Subsequence 转化为求LCS
var minDistance = function(word1, word2) {
    let dp = new Array(word2.length+1).fill(0);
    for(let i=1;i<=word1.length;i++){
        const nextDp = new Array(word2.length);
        nextDp[0] = 0;
        for(let j=1;j<=word2.length;j++){
            nextDp[j] = Math.max(
                dp[j],
                nextDp[j-1],
                word1[i-1]===word2[j-1]? dp[j-1]+1:0
            );
        }
        dp = nextDp;
    }
    return word1.length+word2.length-Math.max(...dp)*2;
};

// dp[i][j] text1[0...i] text2[0...j] 要删除的最小长度
var minDistance = function(word1, word2) {
    let dp = new Array(word2.length+1);
    for(let i=0;i<dp.length;i++){
        // 相当于text1 取0个 text2取i个 要删除的长度
        dp[i] = i;
    }
    for(let i=1;i<=word1.length;i++){
        const newDp = new Array(word2.length);
        newDp[0] = i;
        for(let j=1;j<=word2.length;j++){
            if(word1[i-1] === word2[j-1]){
                newDp[j] = dp[j-1];
            }else{
                newDp[j] = Math.min(dp[j],newDp[j-1])+1;
            }
        }
        dp = newDp;
    }
    return dp[word2.length]
};