/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let maxCount = 0;
    let map = new Map();
    for(let i=lowLimit;i<=highLimit;i++){
        const num = calc(i);
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1);
        }
        maxCount = Math.max(maxCount,map.get(num))
    }
    return maxCount;
};

function calc(num){
    let result = 0;
    while(num>0){
        const digit = num%10;
        result += digit;
        num = (num-digit)/10;
    }
    return result;
}