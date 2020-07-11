/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
    // 滑动窗口
    let total = 0;
    for(let i=0;i<k-1;i++){
        total += calories[i];
    }
    let result = 0;
    for(let i=k-1;i<calories.length;i++){
        total += calories[i];
        if(total>upper){
            result++;
        }else if(total<lower){
            result--;
        }
        total -= calories[i-k+1];
    }
    return result;
};