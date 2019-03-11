/**
 * @param {number[]} A
 * @return {number}
 */
// 时间复杂度 O(n)
var numberOfArithmeticSlices = function(A) {
    let startIndex = 0;
    let result = 0;
    while(startIndex<A.length-2){
        // 从前向后尽可能把节点纳入等差数列中
        const delta = A[startIndex+1]-A[startIndex];
        let endIndex = startIndex+1;
        while(endIndex<A.length-1 && A[endIndex+1]-A[endIndex] === delta){
            endIndex++;
        }
        // 只有两个  不算
        if(endIndex - startIndex === 1){
            startIndex++
        }else{
            // 这个等差数列总共有count个元素 
            // 我们要取其连续的子序列 最多有count个元素 最小有3个元素
            // 问求总共有几种取法 又是个等差数列
            const count = endIndex-startIndex+1;
            result += (count-1)*(count-2)/2;
            
            startIndex = endIndex+1;
        }
    }
    return result;
};



/**
 * @param {number[]} A
 * @return {number}
 */
// 动态规划实现 时间复杂度O(n)
var numberOfArithmeticSlices = function(A) {
    let result = 0;
    // dp表示的是以当前节点为最后节点的slice的个数
    let dp = 0;
    for(let i=2;i<A.length;i++){
        if(A[i]-A[i-1] === A[i-1]-A[i-2]){
            // 此时有一个以 i-2 节点为开始的新的slice产生
            // 然后之前以i-1为结尾的slice每个都添加第i个节点 构成新的slice
            dp++;
            result += dp;
        }else{
            // slice终结
            dp = 0;
        }
    }
    return result;
};