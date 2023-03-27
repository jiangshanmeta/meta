function repairCars (ranks: number[], cars: number): number {
    let low = 1;
    let high = Math.min(...ranks) * cars * cars;
    let result = high;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        let sum = 0;
        for (const rank of ranks) {
            sum += Math.floor(Math.sqrt(mid / rank));
        }
        if (sum < cars) {
            low = mid + 1;
        } else {
            result = Math.min(result, mid);
            high = mid - 1;
        }
    }
    return result;
}
