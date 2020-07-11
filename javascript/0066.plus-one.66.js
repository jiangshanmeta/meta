/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const arr = [];
    let add = 1;
    for(let index = digits.length-1;index>-1;index--){
        const sumVal = digits[index] + add;
        if(sumVal<10){
            arr.unshift(sumVal);
            add = 0;
        }else{
            arr.unshift(sumVal-10);
            add = 1;
        }
    }
    
    if(add){
        arr.unshift(1);
    }
    
    return arr;
};