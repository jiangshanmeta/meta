// Given an array A of integers and integer K, return the maximum S such that there exists i < j with A[i] + A[j] = S and S < K. If no i, j exist satisfying this equation, return -1.
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
    A.sort((a,b)=>a-b);
    let low = 0;
    let high = A.length-1;
    let result = -1;
    while(low<high){
        const sum = A[low]+A[high];
        if(sum<K){
            result = Math.max(result,sum);
            low++;
        }else{
            high--;
        }
    }
    return result;
};