/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    let result = 0;
    for (let i = 0; i < points.length; i++) {
        const disCountMap = {};
        for (let j = 0; j < points.length; j++) {
            if (i === j) {
                continue;
            }
            const dis = (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2;
            disCountMap[dis] = (disCountMap[dis] || 0) + 1;
        }
        const counts = Object.values(disCountMap);

        for (let j = 0; j < counts.length; j++) {
            result += counts[j] * (counts[j] - 1);
        }
    }
    return result;
};
