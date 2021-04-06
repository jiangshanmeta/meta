function twoCitySchedCost (costs: number[][]): number {
    for (let i = 0; i < costs.length; i++) {
        costs[i].push(costs[i][1] - costs[i][0]);
    }
    costs.sort((a, b) => a[2] - b[2]);
    let result = 0;
    for (let i = 0; i < costs.length / 2; i++) {
        result += costs[i][1];
    }
    for (let i = costs.length / 2; i < costs.length; i++) {
        result += costs[i][0];
    }
    return result;
}
