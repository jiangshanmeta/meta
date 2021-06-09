function minSideJumps (obstacles: number[]): number {
    let dp = [Infinity, 0, Infinity, ];
    for (let i = 1; i < obstacles.length; i++) {
        const nDp = [Infinity, Infinity, Infinity, ];
        let index = -1;
        for (let j = 0; j < 3; j++) {
            if (obstacles[i - 1] === j + 1) {
                index = j;
                continue;
            }
            if (obstacles[i] === j + 1) {
                continue;
            }
            for (let k = 0; k < dp.length; k++) {
                nDp[j] = Math.min(nDp[j], dp[k] + (j === k ? 0 : 1));
            }
        }
        if (index !== -1 && obstacles[i] !== index + 1) {
            nDp[index] = Math.min(...nDp) + 1;
        }
        dp = nDp;
    }
    return Math.min(...dp);
}
