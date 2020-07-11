/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // dp[i]表示从头开始长度为i的子串是否可以match
    const dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    // index表示s至少需要的长度 ?和普通字符都会增加index *可以匹配0个 因此不会增加index
    let index = 0;
    for(let i=0;i<p.length;i++){
        if(p[i] === '*'){
            // 对于* 可以匹配任意个字符 从上一个可到达长度之后的任意长度都可到达
            for(let j=index+1;j<dp.length;j++){
                if(dp[j-1]){
                    for(let k=j;k<dp.length;k++){
                        dp[k] = true;
                    }
                    
                    break;
                }
            }
        }else{
            // ?或者普通字符都会增加index 所以index===s.length判断pattern是否超了
            if(index === s.length){
                return false;
            }
            if(p[i] === '?'){
                // dp[j-1] 能到达 则dp[j] 可到达 
                // 倒着跑循环 因为会改变dp[j]
                for(let j=dp.length-1;j>index;j--){
                    if(dp[j-1]){
                        dp[j] = true;
                    }else{
                        dp[j] = false;
                    }
                }
            }else{
                // dp[j-1] 可到达 且 s[j-1]（需要匹配的新字符） === s[i]时 j可到达
                for(let j=dp.length-1;j>index;j--){
                    if(dp[j-1] && p[i] === s[j-1]){
                        dp[j] = true;
                    }else{
                        dp[j] = false;
                    }
                }
            }
            index++;
        }
    }
    return dp[s.length];
};