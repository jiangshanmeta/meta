/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
    const sumListL = getSum(A,L);
    const sumListM = getSum(A,M);
    let result = -Infinity;
    let max = -Infinity;
    // L在左 M在右
    // M的最早开始位置是i+L
    // 注意这里的max使用技巧
    // 相同技巧见leetcode 1014
    for(let i=0;i<sumListL.length;i++){
        if(i+L === sumListM.length){
            break;
        }
        max = Math.max(max,sumListL[i]);
        result = Math.max(result,max+sumListM[i+L]);   
    }
    max = -Infinity;
    // M在左 L在右
    for(let i=0;i<sumListM.length;i++){
        if(i+M === sumListL.length){
            break;
        }
        max = Math.max(max,sumListM[i]);
        result = Math.max(result,max+sumListL[i+M]);
    }
    
    return result;
};

// 滑动窗口尺寸为L 计算每一个窗口内元素的和
function getSum(A,L){
    let index = 0;
    let sum = 0;
    while(index<L-1){
        sum += A[index++];
    }
    const sumList = [];
    while(index<A.length){
        sum += A[index++];
        sumList.push(sum);
        sum -= A[index-L];
    }
    // sumList[i] 为第i个窗口内元素的和
    return sumList;
}