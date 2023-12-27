function numberOfArrays (differences: number[], lower: number, upper: number): number {
    let current = 0;
    let min = 0;
    let max = 0;
    for (let i = 0; i < differences.length; i++) {
        current += differences[i];
        max = Math.max(max, current);
        min = Math.min(min, current);
    }
    const D = upper - lower;
    const d = max - min;
    if (d > D) {
        return 0;
    }
    return D - d + 1;
}
