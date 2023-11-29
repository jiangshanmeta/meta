function numberOfPoints (nums: number[][]): number {
    const counts = new Array<number>(102).fill(0);
    for (const [start, end, ] of nums) {
        counts[start]++;
        counts[end + 1]--;
    }
    let result = 0;
    for (let i = 1; i < 101; i++) {
        counts[i] += counts[i - 1];
        if (counts[i] !== 0) {
            result++;
        }
    }
    return result;
}
