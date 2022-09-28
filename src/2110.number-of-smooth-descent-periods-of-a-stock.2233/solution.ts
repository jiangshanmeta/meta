function getDescentPeriods (prices: number[]): number {
    let result = 0;
    let index = 0;
    while (index < prices.length) {
        const startIndex = index++;
        while (index < prices.length && prices[index] === prices[index - 1] - 1) {
            index++;
        }
        const count = index - startIndex;
        result += count * (count + 1) / 2;
    }
    return result;
}
