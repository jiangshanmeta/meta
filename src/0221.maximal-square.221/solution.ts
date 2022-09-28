function maximalSquare (matrix: string[][]): number {
    let result = 0;
    const M = matrix.length;
    if (M === 0) {
        return 0;
    }
    const N = matrix[0].length;
    let dp:number[] = new Array(N);
    for (let j = 0; j < N; j++) {
        if (matrix[0][j] === '1') {
            result = 1;
            dp[j] = 1;
        } else {
            dp[j] = 0;
        }
    }
    const vertical = [...dp, ];
    for (let i = 1; i < M; i++) {
        let prefix = 0;
        const nDp:number[] = new Array(N);
        if (matrix[i][0] === '1') {
            prefix = 1;
            result = Math.max(result, 1);
            nDp[0] = 1;
        } else {
            nDp[0] = 0;
        }
        for (let j = 1; j < N; j++) {
            if (matrix[i][j] === '0') {
                prefix = 0;
                nDp[j] = 0;
                vertical[j] = 0;
            } else {
                nDp[j] = Math.min(dp[j - 1], prefix, vertical[j]) + 1;
                result = Math.max(result, nDp[j]);
                prefix++;
                vertical[j]++;
            }
        }
        dp = nDp;
    }
    return result ** 2;
}
