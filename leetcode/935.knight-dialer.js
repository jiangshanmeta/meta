/**
 * @param {number} N
 * @return {number}
 */

const mod = Math.pow(10,9)+7;
var knightDialer = function(N) {
    let start = new Array(10).fill(1);
    // 就是一步一步向后递推
    for(let i=1;i<N;i++){
        const next = new Array(N).fill(0);
        next[1] = (start[8]+start[6])%mod;
        next[2] = (start[7]+start[9])%mod;
        next[3] = (start[8]+start[4])%mod;
        next[4] = (start[3]+start[9]+start[0])%mod;
        next[6] = (start[1]+start[7]+start[0])%mod;
        next[7] = (start[2]+start[6])%mod;
        next[8] = (start[1]+start[3])%mod;
        next[9] = (start[2]+start[4])%mod;
        next[0] = (start[4]+start[6])%mod;
        start = next;
    }
    return start.reduce((sum,item)=>{
        sum += item;
        return sum;
    },0)%mod;
};