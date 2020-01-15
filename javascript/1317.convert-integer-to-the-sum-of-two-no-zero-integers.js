/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(let i=1;i<n;i++){
        if(isNoneZero(i) && isNoneZero(n-i)){
            return [i,n-i];    
        }    
    }
};

function isNoneZero(number){
    while(number>0){
        const digit = number%10;
        if(digit === 0){
            return false;
        }
        number = (number-digit)/10;
    }
    return true;
}