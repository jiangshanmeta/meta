function duplicateNumbersXOR (nums: number[]): number {
    const counts = new Array<boolean>(50);
    let result = 0;
    for (const n of nums) {
        if (counts[n - 1]) {
            result ^= n;
        }
        counts[n - 1] = true;
    }
    return result;
}
