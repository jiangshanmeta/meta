function supplyWagon (supplies: number[]): number[] {
    const N = supplies.length;
    const target = N >> 1;
    while (supplies.length > target) {
        let minSum = supplies[0] + supplies[1];
        let minIndex = 0;
        for (let i = 1; i < supplies.length - 1; i++) {
            const sum = supplies[i] + supplies[i + 1];
            if (sum < minSum) {
                minSum = sum;
                minIndex = i;
            }
        }
        supplies.splice(minIndex, 2, minSum);
    }
    return supplies;
}
