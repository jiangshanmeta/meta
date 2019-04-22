/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    const result = new Array(A.length);
    let num = 0;
    for(let i=0;i<A.length;i++){
        // 加完A[i]就模5,避免太大溢出
        num = (num*2+A[i])%5;
        result[i] = num === 0;
    }
    return result;
};