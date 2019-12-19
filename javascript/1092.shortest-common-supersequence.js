/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    // dp[i][j] 最短的supersequence的长度
    const dp = new Array(str1.length+1);
    dp[0] = new Array(str2.length+1);
    for(let i=0;i<dp[0].length;i++){
        dp[0][i] = i;
    }
    for(let i=1;i<dp.length;i++){
        dp[i] = new Array(str2.length+1);
        dp[i][0] = i;
        for(let j=1;j<dp[i].length;j++){
            if(str1[i-1] === str2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1;
            }else{
                dp[i][j] = Math.min(
                    dp[i-1][j],
                    dp[i][j-1]
                )+1;
            }
        }
    }
    // 从dp中找到一个解
    const result = [];
    let x = str1.length;
    let y = str2.length;
    while(x>0 && y>0){
        if(str1[x-1] === str2[y-1]){
            // 两个字符相等
            result.push(str1[x-1]);
            x--;
            y--;
        }else if(dp[x][y-1]<dp[x-1][y]){
            // 字符不等 看哪个更小
            result.push(str2[y-1]);
            y--;
        }else{
            result.push(str1[x-1]);
            x--;
        }
    }
    while(x>0){
        result.push(str1[x-1]);
        x--;
    }
    while(y>0){
        result.push(str2[y-1]);
        y--;
    }
    
    return result.reverse().join('');
};