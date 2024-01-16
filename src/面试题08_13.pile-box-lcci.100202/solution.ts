function pileBox (box: number[][]): number {
    box.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return a[2] - b[2];
    });
    const dp = new Array<number>(box.length);

    for (let i = 0; i < box.length; i++) {
        dp[i] = box[i][2];
        for (let j = 0; j < i; j++) {
            if (box[i][0] > box[j][0] && box[i][1] > box[j][1] && box[i][2] > box[j][2]) {
                dp[i] = Math.max(dp[i], dp[j] + box[i][2]);
            }
        }
    }
    return Math.max(...dp);
}
