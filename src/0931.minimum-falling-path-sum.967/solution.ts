function minFallingPathSum (A: number[][]): number {
    let dp = A[0];
    for (let i = 1; i < A.length; i++) {
        const nextDp:number[] = new Array(A[0].length).fill(Infinity);
        for (let j = 0; j < A[0].length; j++) {
            for (let d = -1; d < 2; d++) {
                if (j + d < 0 || j + d === A[0].length) {
                    continue;
                }
                nextDp[j] = Math.min(nextDp[j], dp[j + d] + A[i][j]);
            }
        }
        dp = nextDp;
    }
    return Math.min(...dp);
}
