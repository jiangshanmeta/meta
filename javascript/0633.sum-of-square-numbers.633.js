/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let low = 0;
    let high = Math.floor(Math.sqrt(c));
    // 二分
    while(low<=high){
        const sum = low*low+high*high;
        if(sum === c){
            return true;
        }else if(sum<c){
            low++;
        }else{
            high--;
        }
    }
    return false;
};