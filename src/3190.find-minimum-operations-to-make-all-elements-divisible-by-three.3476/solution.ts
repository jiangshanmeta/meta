function minimumOperations (nums: number[]): number {
    let result = 0;
    for (const n of nums) {
        if (n % 3 !== 0) {
            result++;
        }
    }
    return result;
}
