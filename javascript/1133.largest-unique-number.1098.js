/**
 * @param {number[]} A
 * @return {number}
 */
// 题目中还对A[i]做了限定为0-1000也可用hash
var largestUniqueNumber = function(A) {
    // 从小到大排序
    A.sort((a,b)=>a-b);
    let index = A.length-1;
    while(index>-1){
        // 判断是否唯一
        if((A[index]>0 && A[index-1] !== A[index]) || index===0){
            return A[index];
        }
        // 不唯一相同的都不考虑
        const value = A[index];
        while(index>-1 && A[index] === value){
            index--;
        }
    }
    return -1;
};