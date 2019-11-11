/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function(N) {
    if(N===0){
        return '0';
    }
    const stack = [];
    while(N){
        // 看余数 通过位运算看最后一位是否为1
        stack.push(N&1)
        // 除-2
        N = -(N>>1);
    }
    return stack.reverse().join('')
};