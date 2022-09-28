function minTimeToVisitAllPoints (points: number[][]): number {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        const dx = Math.abs(points[i][0] - points[i - 1][0]);
        const dy = Math.abs(points[i][1] - points[i - 1][1]);
        result += Math.max(dx, dy);
    }
    return result;
}
