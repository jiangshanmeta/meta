/**
 * @param {number} N
 * @return {string}
 */
// 本质是除k取余法
var baseNeg2 = function(N) {
    if(N === 0){
        return "0"
    }
    const result = [];
    let sign = 1;
    while(N>0){
        const rest = N%-2;
        result.unshift(rest);
        N = (N-sign*rest)/2;
        sign = -sign;
    }
    
    return result.join("");
};