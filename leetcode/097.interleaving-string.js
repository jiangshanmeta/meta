/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// 动态规划
var isInterleave = function(s1, s2, s3) {
    if(s1.length+s2.length !== s3.length){
        return false;
    }
    // 是个二位矩阵 从左向右看表示s1提供的字符增加 从上往下看表示s2提供的字符增加
    const L1 = s1.length;
    const L2 = s2.length;
    const dp = [];
    for(let i=0;i<L2+1;i++){
        dp.push(new Array(L1+1).fill(false));
    }
    dp[0][0] = true;
    // j表示s2提供i个字符 j表示s1提供j个字符
    // 对于一个具体的[i,j]坐标 表示s2提供i个字符 s1提供j个字符能否构成s3前i+j个字符
    // 从上往下看表示s2提供第i+j个字符
    // 从左向右看表示s1提供第i+j个字符
    for(let i=0;i<L2+1;i++){
        for(let j=0;j<L1+1;j++){
            // 从上往下看
            if(i>0 && dp[i-1][j] && s2[i-1] === s3[i+j-1]){
                dp[i][j] = true;
            }
            // 从左往右看
            if(j>0 && dp[i][j-1] && s1[j-1] === s3[i+j-1]){
                dp[i][j] = true;
            }
        }
    }

    return dp[L2][L1]
};