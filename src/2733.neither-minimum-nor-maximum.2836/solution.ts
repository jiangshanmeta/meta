function findNonMinOrMax (nums: number[]): number {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    for (const n of nums) {
        if (n !== min && n !== max) {
            return n;
        }
    }
    return -1;
}
