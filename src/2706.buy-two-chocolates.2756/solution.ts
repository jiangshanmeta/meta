function buyChoco (prices: number[], money: number): number {
    prices.sort((a, b) => a - b);
    const sum = prices[0] + prices[1];
    if (sum > money) {
        return money;
    }
    return money - sum;
}
