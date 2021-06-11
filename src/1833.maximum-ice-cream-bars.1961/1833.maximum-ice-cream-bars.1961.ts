function maxIceCream (costs: number[], coins: number): number {
    costs.sort((a, b) => a - b);
    let index = 0;
    while (index < costs.length && costs[index] <= coins) {
        coins -= costs[index++];
    }
    return index;
}
