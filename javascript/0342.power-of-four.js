/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num<=0){
        return false;
    }
    // 判断是否是2的幂
    if( (num & (num-1)) === 0 ){
        // 每次右移两位 直到为1或者0
        // 为1即是4的幂
        while(num>1){
            num = num >> 2;
        }
        return num === 1
    }
    return false;
};

var isPowerOfFour = function(num) {
    return num>0 && (num&(num-1)) === 0 && (num&0x55555555  ) === num
};