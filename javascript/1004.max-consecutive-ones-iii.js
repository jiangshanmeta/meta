/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let index = A.indexOf(1);
    // 一个1都没有的
    if(index === -1){
        return Math.min(A.length,K);
    }
    // ones zeros 一组连续的1或者0 含有元素个数
    const ones = [];
    const zeros = [];
    let totalOneCount = 0;
    while(index<A.length){
        let oneCount = 0;
        while(index<A.length && A[index] === 1){
            totalOneCount++;
            index++;
            oneCount++; 
        }
        ones.push(oneCount);
        let zeroCount = 0;
        while(index<A.length && A[index] === 0){
            index++;
            zeroCount++;
        }
        zeros.push(zeroCount);
    }
    // 可转换为全为1
    if(totalOneCount+K>=A.length){
        return A.length; 
    }
    // 滑动窗口
    // current 当前窗口能构成的最多的连续的1 
    // startIndex 开始的1在ones的索引 该元素计入current
    // endIndex 结束位置在zeros的索引 该元素不计入current
    let result = Math.max(...ones)+K;
    let startIndex = 0;
    let endIndex = 0;
    let current = ones[0];

    while(endIndex<zeros.length){
        // 尽可能连接后面的元素
        while(endIndex<zeros.length && K>=zeros[endIndex]){
            K -= zeros[endIndex];
            current += zeros[endIndex];
            endIndex++;
            if(endIndex<ones.length){
                current += ones[endIndex];
            }
        }

        result = Math.max(result,current+K);
        // 窗口向右滑动
        if(startIndex<endIndex){
            current = current - ones[startIndex] - zeros[startIndex];
            K += zeros[startIndex];
            startIndex++;
        }else{
            // 周边的0太多 K太小 一组独立的1
            startIndex++;
            if(startIndex<ones.length){
                current = ones[startIndex];
            }
            endIndex++;
        }
    }
    return result;
};