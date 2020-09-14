/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        const deltax = Math.abs(points[i][0] - points[i - 1][0]);
        const deltay = Math.abs(points[i][1] - points[i - 1][1]);
        // 优先走斜路，再尝试水平垂直走
        result += Math.max(deltax, deltay);
    }
    return result;
};
