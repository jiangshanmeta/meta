/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const result = [];
    for(let i=1;i<10;i++){
        backTracking(i,i,low,high,result);
    }
    result.sort((a,b)=>a-b);
    return result;
};
// 回溯嘛
function backTracking(num,lastDigit,low,high,result){
    if(num>=low && num<=high){
        result.push(num);
    }
    if(lastDigit<9){
        lastDigit++;
        backTracking(num*10+lastDigit,lastDigit,low,high,result);
    }
}