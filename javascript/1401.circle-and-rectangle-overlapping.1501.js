/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, x_center, y_center, x1, y1, x2, y2) {
    // 矩形中心
    const x3 = (x1 + x2) / 2;
    const y3 = (y1 + y2) / 2;
    // 两个中心的距离
    const dis = Math.sqrt((x_center - x3) ** 2 + (y_center - y3) ** 2);
    const width = Math.abs(x1 - x2);
    const height = Math.abs(y1 - y2);
    // 允许的最大距离
    const dis2 = radius + Math.sqrt(width ** 2 + height ** 2) / 2;
    // console.log(dis,dis2);
    return dis2 >= dis;
};
