/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    // 动态规划
    const mod = 10**9+7;
    let lastRow = [1,1,1,1,1];
    for(let i=1;i<n;i++){
        const newRow = [0,0,0,0,0];
        newRow[0] = (lastRow[1]+lastRow[2]+lastRow[4])%mod
        newRow[1] = (lastRow[0]+lastRow[2])%mod
        newRow[2] = (lastRow[1]+lastRow[3])%mod
        newRow[3] = (lastRow[2])%mod
        newRow[4] = (lastRow[2]+lastRow[3])%mod
        
        lastRow = newRow;
    }
    
    let sum = 0;
    for(let i=0;i<5;i++){
        sum += lastRow[i]
    }
    return sum%mod;
};