function minimumCost (cost: number[]): number {
    let result = 0;
    cost.sort((a, b) => b - a);
    let index = 0;
    while (index < cost.length) {
        result += cost[index++];
        if (index < cost.length) {
            result += cost[index];
            index += 2;
        }
    }
    return result;
}
