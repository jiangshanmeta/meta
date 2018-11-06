/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
    // 最后一位是0/1时需要翻转的次数
    let last0Count = S[0] === '0'?0:1;
    let last1Count = S[0] === '1'?0:1;

    // 不断扩张最后一位
    for(let i=1;i<S.length;i++){
        // 最后一位是0，则前面必须都是0
        let newLast0 = last0Count + (S[i]==='0'?0:1);
        // 最后一位是1，前端可以是0或1
        last1Count = Math.min(last0Count,last1Count)+(S[i] === '1'?0:1);
        last0Count = newLast0;
    }
    return Math.min(last0Count,last1Count);
};