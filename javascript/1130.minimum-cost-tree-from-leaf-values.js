/**
 * @param {number[]} arr
 * @return {number}
 */
// 时间复杂度 O(N^3)
var mctFromLeafValues = function(arr) {
    // rangeMax[i][j] [i,j] 内的最大值
    const rangeMax = new Array(arr.length);
    for(let i=0;i<arr.length;i++){
        rangeMax[i] = new Array(arr.length);
        rangeMax[i][i] = arr[i];
        for(let j=i+1;j<arr.length;j++){
            rangeMax[i][j] = Math.max(rangeMax[i][j-1],arr[j]);
        }
    }
    // dp[i][j] [i,j]范围内构成数的费用的最小值
    const dp = new Array(arr.length);
    for(let i=dp.length-1;i>-1;i--){
        dp[i] = new Array(arr.length).fill(Infinity);
        dp[i][i] = arr[i];
        for(let j=i+1;j<arr.length;j++){
            // 以k为边界划分左右两个子树
            for(let k=i;k<j;k++){
                dp[i][j] = Math.min(
                    dp[i][j],
                    // 左右子树费用最小值+合成所需要的费用
                    dp[i][k]+dp[k+1][j]+rangeMax[i][k]*rangeMax[k+1][j]
                );    
            }
        }
        
    }
    let sum = arr.reduce((sum,item)=>{
        return sum+item;
    },0);

    return dp[0][arr.length-1]-sum;
};