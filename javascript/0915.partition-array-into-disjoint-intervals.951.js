/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
    // maxList[i] 表示从A[0]-A[i]中的最大值
    const maxList = new Array(A.length);
    maxList[0] = A[0];
    for(let i=1;i<A.length-1;i++){
        maxList[i] = Math.max(maxList[i-1],A[i]);
    }
    // minList[i] 表示 A[i]-A[A.length-1]中的最小值
    const minList = new Array(A.length);
    minList[A.length-1] = A[A.length-1];
    for(let i=A.length-2;i>-1;i--){
        minList[i] = Math.min(minList[i+1],A[i]);
    }
    for(let i=0;i<A.length;i++){
        // 找到最小的一个
        if(maxList[i]<=minList[i+1]){
            return i+1;
        }
    }
};