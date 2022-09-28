function maxProfit (prices: number[]): number {
    const stackMin = [prices[0], ];
    const stackMax = [prices[0], ];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > stackMax[stackMax.length - 1]) {
            stackMax[stackMax.length - 1] = prices[i];
        } else if (prices[i] < stackMax[stackMax.length - 1]) {
            stackMin.push(prices[i]);
            stackMax.push(prices[i]);
        }
    }
    let result = 0;
    for (let i = 0; i < stackMax.length; i++) {
        result += stackMax[i] - stackMin[i];
    }
    return result;
}
