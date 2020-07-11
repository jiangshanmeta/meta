/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    const L = A.length;
    // key是C[i]+D[j] value是对应出现次数
    const sumCountMap = {};
    for(let i=0;i<L;i++){
        for(let j=0;j<L;j++){
            const sum = C[i]+D[j];
            sumCountMap[sum] = (sumCountMap[sum] || 0)+1
        }
    }
    let result = 0;
    for(let i=0;i<L;i++){
        for(let j=0;j<L;j++){
            const rest = -A[i]-B[j];
            if(sumCountMap[rest] !== undefined){
                result += sumCountMap[rest];
            }
        }
    }
    return result;
};