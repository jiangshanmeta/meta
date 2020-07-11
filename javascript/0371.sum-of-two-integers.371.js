/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(b === 0){
        return a;
    }
    // sum是不考虑进位的相加
    const sum = a ^ b;
    // carry是进位
    const carry = (a & b) << 1;
    return getSum(sum,carry)
};