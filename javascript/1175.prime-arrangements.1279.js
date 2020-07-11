/**
 * @param {number} n
 * @return {number}
 */
const mod = 10**9+7;
var numPrimeArrangements = function(n) {
    const primeCount = countPrimes(n+1);
    // 质数的分别排列组合 非质数的分别排列组合 最后相乘
    let result = 1;
    for(let i=2;i<primeCount+1;i++){
        result = result*i%mod;
    }
    for(let i=2;i<n-primeCount+1;i++){
        result = result*i%mod;
    }
    return result;
};
// leetcode 204 小于n的质数有几个
var countPrimes = function(n) {
    const primes = new Array(n).fill(true);
    let count = 0;
    for(let i=2;i<n;i++){
        if(!primes[i]){
            continue;
        }
        count++;
        for(let j=i*2;j<n;j+=i){
            primes[j] = false;
        }
    }
    return count;
};