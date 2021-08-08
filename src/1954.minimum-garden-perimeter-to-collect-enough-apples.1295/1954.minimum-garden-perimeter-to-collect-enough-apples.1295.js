/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function (neededApples) {
    let low = 1;
    // 通过getTotalByRadius可以观察到 上界是立方根
    // 时间复杂度O(log (N^(1/3)) )
    let high = Math.cbrt(neededApples);
    let r = high;
    // 二分查找
    while (low <= high) {
        const mid = (low + high) >> 1;
        const total = getTotalByRadius(mid);
        if (total < neededApples) {
            low = mid + 1;
        } else {
            r = Math.min(r, mid);
            high = mid - 1;
        }
    }
    return r * 8;
};
// 通过半径获取果子总数
// 本质上是等差数列求和
function getTotalByRadius (r) {
    return (r + 1) * (r + 1) * r * 4 - (r + 1) * r * 2;
}
