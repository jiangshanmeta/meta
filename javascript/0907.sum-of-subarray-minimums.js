/**
 * @param {number[]} A
 * @return {number}
 */
const mod = 10**9+7;
var sumSubarrayMins = function(A) {
    // left[i]表示前面有几个连续的>=A[i]的元素
    const left = new Array(A.length);
    left[0] = 0;
    for(let i=1;i<A.length;i++){
        let start = i-1;
        while(start>-1 && A[start]>A[i]){
            start = start-left[start]-1;
        }
        left[i] = i-start-1;
    }
    // right[i]表示后面有几个连续的>A[i]的元素
    const right = new Array(A.length);
    right[A.length-1] = 0;
    for(let i=A.length-2;i>-1;i--){
        let start = i+1;
        while(start<A.length && A[start]>=A[i]){
            start = start+right[start]+1;
        }
        right[i] = start-i-1;
    }
    // left是>= 而right是> 是考虑到了A中有重复元素 统一归到left中处理

    let result = 0;

    for(let i=0;i<A.length;i++){
        // 以A[i]为最小值的子序列们
        result = (result + (left[i]*right[i]+left[i]+right[i]+1)*A[i])%mod;
    }

    return result;
};