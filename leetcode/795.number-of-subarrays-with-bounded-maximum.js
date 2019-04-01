/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
    let index = 0;
    // queue存放的是在LR范围内数字对应的索引
    let queue = [];
    let result = 0;
    while(index<A.length){
        if(A[index]>R){
            index++;
            continue;
        }
        let left = index;
        while(index<A.length && A[index]<=R){
            if(A[index]>=L){
                queue.push(index);
            }
            index++;
        }
        
        while(queue.length){
            const maxIndex = queue.shift();
            // 开始元素从left到maxIndex 结束元素从maxIndex到index-1
            result += (maxIndex-left+1)*(index-maxIndex);
            left = maxIndex+1;
        }
        
    }
    return result;
};