function maxProfit (prices: number[]): number {
    let prevMin = prices[0];
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prevMin) {
            result = Math.max(result, prices[i] - prevMin);
        } else {
            prevMin = Math.min(prevMin, prices[i]);
        }
    }
    return result;
}
