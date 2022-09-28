/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
    return queries.map(([x, y, r, ]) => {
        let result = 0;
        const maxDis = r * r;
        for (const [xi, yi, ] of points) {
            const dis = (xi - x) ** 2 + (yi - y) ** 2;
            if (dis <= maxDis) {
                result++;
            }
        }
        return result;
    });
};
