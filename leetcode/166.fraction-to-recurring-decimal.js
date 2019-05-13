/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0){
        return '0';
    }
    
    let sign = 1;
    if(numerator<0){
        sign = -sign;
        numerator = -numerator;
    }
    if(denominator<0){
        sign = -sign;
        denominator = -denominator;
    }
    
    if(numerator%denominator === 0){
        return `${sign>0?'':'-'}${numerator/denominator}`;
    }
    
    const integer = (numerator-numerator%denominator)/denominator;
    numerator = (numerator%denominator)*10;
    const decimal = [];
    const map = {};
    while(numerator>0){
        if(map[numerator] !== undefined){
            decimal.splice(map[numerator],0,'(');
            decimal.push(')');
            break;
        }else{
            const digit = (numerator-numerator%denominator)/denominator;
            map[numerator] = decimal.length;
            numerator = (numerator%denominator)*10;
            decimal.push(digit);
        }
    }
    
    return `${sign>0?'':'-'}${integer}.${decimal.join("")}`;
};