/**
 * @param {number[]} A
 * @return {number}
 */
// 要求i<j A[i]+A[j]+i-j的最大值
// 即求(A[i]+i)+(A[j]-i)的最大值
var maxScoreSightseeingPair = function(A) {
    let result = -Infinity;
    let max = A[0];
    for(let i=1;i<A.length;i++){
        // max是前i-1个元素中A[m]+m值的最大值
        result = Math.max(result,max+A[i]-i);
        max = Math.max(max,A[i]+i);
    }
    return result;
};