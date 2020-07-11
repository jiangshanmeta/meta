/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(numbers) {
    if(numbers.length<5){
        return false;
    }
    
    const flags = new Array(14).fill(0);
    let min = 14;
    let max = 1;
    for(let i=0;i<numbers.length;i++){
        // 非0 且重复的不是
        if(numbers[i]>0 && flags[numbers[i]]){
            return false;
        }
        flags[numbers[i]]++;
        if(numbers[i]>0){
            min = Math.min(min,numbers[i]);
            max = Math.max(max,numbers[i]);
        }
    }
    // 最大最小差值最大为4 ，无论如何都能
    if(max-min>4){
        return false;
    }
    
    return true;
};