/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function(n) {
    const dps = new Array(n);
    dps[0] = [1,1,1,1,1,1];
    for(let i=1;i<n;i++){
        dps[i] = new Array((i+1)*6).fill(0);
        for(let j=i-1;j<6*i;j++){
            for(let k=1;k<7;k++){
                dps[i][j+k] += dps[i-1][j];
            }
        }
    }
    const total = 6**n;
    const result = [];
    for(let i=n-1;i<6*n;i++){
        result.push(dps[n-1][i]/total);
    }

    return result;
};