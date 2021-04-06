function findMinDifference (timePoints: string[]): number {
    const times = timePoints.map((str) => {
        return (+str.slice(0, 2)) * 60 + (+str.slice(3));
    }).sort((a, b) => a - b);
    let result = times[0] + 1440 - times[times.length - 1];
    for (let i = 1; i < times.length; i++) {
        result = Math.min(result, times[i] - times[i - 1]);
    }
    return result;
}
