/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const row = new Array(m).fill(1);
    for(let i=1;i<n;i++){
        let last = 1;
        for(let j=1;j<m;j++){
            row[j] += last;
            last = row[j];
        }
    }
    
    return row[m-1];
};