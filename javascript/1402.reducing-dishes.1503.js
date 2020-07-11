/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    // 从小到达排序
    // 我们希望较大的数字排在后面，较小的数字排在前面
    satisfaction.sort((a,b)=>a-b);
    let sum = 0;
    let rightSum = 0;
    let result = 0;
    for(let i=satisfaction.length-1;i>-1;i--){
        // 考虑添加第i个数字 此时的和的变化 
        sum += satisfaction[i];
        rightSum += sum;
        result = Math.max(result,rightSum);
    }
    return result;
};