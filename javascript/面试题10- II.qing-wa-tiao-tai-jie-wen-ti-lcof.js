/**
 * @param {number} n
 * @return {number}
 */
const mod = 10**9+7;
var numWays = function(n) {
    if(n === 0){
        return 1;
    }
    let a = 1;
    let b = 1;
    for(let i=2;i<=n;i++){
        [a,b] = [b,(a+b)%mod];
    }
    return b;
};