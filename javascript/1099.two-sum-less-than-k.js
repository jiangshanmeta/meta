// Given an array A of integers and integer K, return the maximum S such that there exists i < j with A[i] + A[j] = S and S < K. If no i, j exist satisfying this equation, return -1.
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// 直接暴力算的
var twoSumLessThanK = function(A, K) {
    A.sort((a,b)=>a-b);
    let result = -1;
    for(let i=0;i<A.length-1;i++){
        if(A[i]>=K){
            break;
        }
        for(let j=i+1;j<A.length;j++){
            const sum = A[i]+A[j];
            if(sum>=K){
                break;
            }
            result = Math.max(result,sum);
        }
    }
    return result;
};