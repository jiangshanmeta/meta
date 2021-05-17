function getModifiedArray (length: number, updates: number[][]): number[] {
    const result:number[] = new Array(length).fill(0);
    for (const [start, end, inc, ] of updates) {
        result[start] += inc;
        if (end + 1 < length) {
            result[end + 1] -= inc;
        }
    }
    for (let i = 1; i < length; i++) {
        result[i] += result[i - 1];
    }
    return result;
}
