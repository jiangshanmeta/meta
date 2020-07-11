/**
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function(arr) {
    // dp[j]表示上一行除了第j列能取到的最小值
    const L = arr.length;
    let dp = new Array(L).fill(0);
    for(let i=0;i<L;i++){
        // newDp[j] 这一行第j列能取到的最小值
        const newDp = arr[i].map((item,index)=>item+dp[index]);
        // 我们需要的是 dp[j] 这一行除了第j列能取到的最小值
        // 参考leetcode 238的思路
        const leftMin = new Array(L);
        leftMin[0] = Infinity;
        let minVal = newDp[0];
        for(let j=1;j<L;j++){
            leftMin[j] = minVal;
            minVal = Math.min(newDp[j],minVal);
        }
        const rightMin = new Array(L);
        rightMin[L-1] = Infinity;
        minVal = newDp[L-1];
        for(let j=L-2;j>-1;j--){
            rightMin[j] = minVal;
            minVal = Math.min(minVal,newDp[j]);
        }
        
        dp = leftMin.map((item,index)=>Math.min(item,rightMin[index]));
    }

    return Math.min(...dp);
};