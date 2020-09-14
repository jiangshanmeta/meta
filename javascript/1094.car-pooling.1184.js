/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    // 按上车位置从小到大排列
    trips.sort((a, b) => a[1] - b[1]);
    const counts = [];
    // positions存的是排好序的下车位置 counts对应的是多少人需要下车
    const positions = [];
    for (let i = 0; i < trips.length; i++) {
        const start = trips[i][1];
        // 找到需要下车的
        let index = -1;
        let low = 0;
        let high = positions.length - 1;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (positions[mid] > start) {
                high = mid - 1;
            } else {
                index = Math.max(index, mid);
                low = mid + 1;
            }
        }
        // 下车 更新可用的位置
        while (index > -1) {
            capacity += counts[index];
            counts.splice(index, 1);
            positions.splice(index, 1);
            index--;
        }
        if (capacity < trips[i][0]) {
            return false;
        }
        capacity -= trips[i][0];
        // 插入当前上车的人的信息
        const position = trips[i][2];
        low = 0;
        high = positions.length - 1;
        index = positions.length;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (positions[mid] > position) {
                index = Math.min(mid, index);
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        positions.splice(index, 0, position);
        counts.splice(index, 0, trips[i][0]);
    }
    return true;
};
