function minIncrements (n: number, cost: number[]): number {
    let l = n >> 1;
    let r = n - 1;
    let result = 0;

    while (l !== r) {
        let index = l;
        while (index < r) {
            const aIndex = 2 * index + 1;
            const bIndex = 2 * (index + 1) + 1;
            let leftVal = 0;
            let rightVal = 0;
            if (aIndex < n) {
                leftVal = cost[aIndex];
                rightVal = cost[bIndex];
            }
            const max = Math.max(leftVal + cost[index], rightVal + cost[index + 1]);
            result += max - cost[index] - leftVal + max - cost[index + 1] - rightVal;
            cost[index] = max;
            cost[index + 1] = max;

            index += 2;
        }

        l = (l - 1) >> 1;
        r = (r - 1) >> 1;
    }
    return result;
}
