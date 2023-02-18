function merge (intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    const result:number[][] = [];
    result[0] = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        if (intervals[i][0] <= last[1]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}
