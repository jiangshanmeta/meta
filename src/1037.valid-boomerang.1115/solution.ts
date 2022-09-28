function isBoomerang (points: number[][]): boolean {
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
                return false;
            }
        }
    }
    if (points[0][0] === points[1][0]) {
        return points[2][0] !== points[0][0];
    }
    const k = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]);
    const b = points[0][1] - k * points[0][0];
    return points[2][1] !== k * points[2][0] + b;
}
