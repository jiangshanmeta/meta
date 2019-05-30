/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num === 1){
        return false;
    }
    
    let sum = 1;

    let base = Math.ceil(Math.sqrt(num));
    while(base<num){
        if(num%base === 0){
            sum += base;
            const rest = num/base;
            if(rest !== base){
                sum += rest;
            }
            base++;
        }else{
            // 快速找下一个数
            base = Math.ceil(num/Math.floor(num/base));
        }
    }

    
    return sum === num;
    
};