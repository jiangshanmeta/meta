/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    let start = A[0];
    for(let i=1;i<A.length;i++){
        for(let j=0;j<A.length;j++){
            let candidate = [start[j]];
            j>0 && candidate.push(start[j-1]);
            j<A.length-1 && candidate.push(start[j+1]);
            A[i][j] = Math.min(...candidate)+A[i][j];
        }
        start = A[i];
    }
    return Math.min(...start);
};