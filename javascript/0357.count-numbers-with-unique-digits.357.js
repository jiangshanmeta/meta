/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(n === 0){
        return 1;
    }
    if(n === 1){
        return 10;
    }
    
    let rst = 9;
    let counter = 1;
    
    while(counter<n){
        rst *= (10-counter)
        counter++;        
    }
    
    
    return countNumbersWithUniqueDigits(n-1)+rst
    
};