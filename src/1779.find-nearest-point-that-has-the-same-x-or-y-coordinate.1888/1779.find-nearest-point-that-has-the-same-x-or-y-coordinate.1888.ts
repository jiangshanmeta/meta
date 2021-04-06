function nearestValidPoint (x: number, y: number, points: number[][]): number {
    let result = -1;
    let minDis = Infinity;
    for (let i = 0; i < points.length; i++) {
        const [xi, yi, ] = points[i];
        if (xi === x || yi === y) {
            const dis = Math.abs(x - xi) + Math.abs(y - yi);
            if (dis < minDis) {
                minDis = dis;
                result = i;
            }
        }
    }
    return result;
}
