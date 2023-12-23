function minCost (costs: number[][]): number {
    let result = [...costs[0], ];
    for (let i = 1; i < costs.length; i++) {
        const nr = new Array<number>(3).fill(Infinity);
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                if (k === j) {
                    continue;
                }
                nr[j] = Math.min(nr[j], result[k] + costs[i][j]);
            }
        }
        result = nr;
    }
    return Math.min(...result);
}
