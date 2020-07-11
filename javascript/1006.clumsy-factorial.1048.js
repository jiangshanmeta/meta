/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    let result = 0;
    let isNotFirst = false;
    while(N>0){
        // 先处理乘除运算
        let value = N--;
        if(N>0){
            value *= (N--);
        }
        if(N>0){
            value = Math.floor(value/(N--));
        }
        // 除了第一组 乘除运算的结果都是要-
        if(isNotFirst){
            result -= value;
        }else{
            result += value;
            isNotFirst = true;
        }
        // 处理加法运算
        result += (N--);
    }
    
    return result;
};