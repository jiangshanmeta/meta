/**
 * @param {number[]} A
 * @return {number[]}
 */
// 基本思路是这样的：每次在未排序序列找找到最大的，先把它flip到最开始，然后flip到末尾
// 这样未排序序列长度-1
// 每次寻找最大的需要遍历一遍，然后需要找N个，因此时间复杂度是O(N^2)
var pancakeSort = function(A) {
    function helper(end,A,result){
        if(end === 0){
            return;
        }
        
        let maxVal = -Infinity;
        let maxIndex = -1;
        for(let i=0;i<end+1;i++){
            if(A[i]>maxVal){
                maxVal = A[i];
                maxIndex = i;
            }
        }
        // 特殊情况，最大的就是最后一个，不用做两次flip
        if(maxIndex === end){
            return helper(end-1,A,result);
        }
        // 特殊情况，最大的是第一个，只需要做一次flip即可
        if(maxIndex === 0){
            result.push(end+1);
            const helperArray = new Array(end);
            for(let i=end;i>0;i--){
                helperArray[end-i] = A[i];
            }
            for(let i=0;i<end;i++){
                A[i] = helperArray[i];
            }
            return helper(end-1,A,result);
        }
        // 老老实实先把最大的flip到开始，然后flip到最后
        result.push(maxIndex+1);
        result.push(end+1);
        const helperArray = A.slice(0,end+1);
        for(let i=maxIndex;i>-1;i--){
            helperArray[maxIndex-i] = A[i];
        }
        helperArray.reverse();
        for(let i=0;i<end+1;i++){
            A[i] = helperArray[i];
        }
        helper(end-1,A,result);
    }
    
    const result = [];
    helper(A.length-1,A,result);
    return result;
};