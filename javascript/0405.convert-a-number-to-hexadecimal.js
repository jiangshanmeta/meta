/**
 * @param {number} num
 * @return {string}
 */
const map = {
    0:'0',
    1:'1',
    2:'2',
    3:'3',
    4:'4',
    5:'5',
    6:'6',
    7:'7',
    8:'8',
    9:'9',
    10:'a',
    11:'b',
    12:'c',
    13:'d',
    14:'e',
    15:'f',
}
// 除k取余法
var toHex = function(num) {
    if(num<0){
        return toHex(2**32+num);
    }
    if(num === 0){
        return '0';
    }
    
    const arr = [];
    while(num>0){
        arr.unshift(map[num%16]);
        num = num/16 | 0;
    }
    return arr.join("");
};