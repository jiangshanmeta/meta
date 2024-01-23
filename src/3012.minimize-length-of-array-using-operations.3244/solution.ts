function minimumArrayLength (nums: number[]): number {
    const min = Math.min(...nums);
    for (const item of nums) {
        if (item % min > 0) {
            return 1;
        }
    }
    let c = 0;
    for (const item of nums) {
        if (item === min) {
            c++;
        }
    }
    return Math.ceil(c / 2);
}
