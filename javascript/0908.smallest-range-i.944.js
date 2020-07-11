/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    // 找到最值
    let min = Infinity;
    let max = -Infinity;
    for(let i=0;i<A.length;i++){
        if(A[i]<min){
            min = A[i];
        }
        if(A[i]>max){
            max = A[i];
        }
    }
    // 当min和max差距小于等于2K时，我们显然可以得到一个B，使得B中所有值都相等
    if(min+K>=max-K){
        return 0;
    }
    // 当差距大于2K时，要使得B中极差最小 则最大为max-K 最小为min+K
    return max-min-2*K;
};