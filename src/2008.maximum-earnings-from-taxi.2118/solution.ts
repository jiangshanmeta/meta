function maxTaxiEarnings (n: number, rides: number[][]): number {
    const profits = new Array<number>(n + 1).fill(0);
    rides.sort((a, b) => a[1] - b[1]);
    let index = 0;
    for (let i = 1; i < n + 1; i++) {
        profits[i] = profits[i - 1];
        while (index < rides.length && rides[index][1] === i) {
            profits[i] = Math.max(
                profits[i],
                profits[rides[index][0]] + rides[index][1] - rides[index][0] + rides[index][2]
            );
            index++;
        }
    }
    return profits[n];
}
