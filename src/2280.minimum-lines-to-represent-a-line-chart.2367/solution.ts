function minimumLines (stockPrices: number[][]): number {
    if (stockPrices.length === 1) {
        return 0;
    }
    stockPrices.sort((a, b) => a[0] - b[0]);
    let dp1 = stockPrices[1][1] - stockPrices[0][1];
    let dd1 = stockPrices[1][0] - stockPrices[0][0];

    let result = 1;
    for (let i = 2; i < stockPrices.length; i++) {
        const dp2 = stockPrices[i][1] - stockPrices[i - 1][1];
        const dd2 = stockPrices[i][0] - stockPrices[i - 1][0];

        if (BigInt(dp1) * BigInt(dd2) !== BigInt(dp2) * BigInt(dd1)) {
            result++;
        }
        dp1 = dp2;
        dd1 = dd2;
    }
    return result;
}
