/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
    if (Number.isInteger(hour)) {
        if (dist.length > hour) {
            return -1;
        }
    } else {
        if (dist.length - 1 > Math.trunc(hour)) {
            return -1;
        }
    }
    let min = 1;
    let max = Math.max(...dist);
    if (!Number.isInteger(hour)) {
        max = Math.max(max, dist[dist.length - 1] / (hour % 1));
    }
    let result = max;
    while (min <= max) {
        const mid = (min + max) >> 1;
        const time = calcTime(dist, mid);
        if (time <= hour) {
            result = Math.min(result, mid);
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return result;
};

function calcTime (dist, speed) {
    let result = dist[dist.length - 1] / speed;
    for (let i = 0; i < dist.length - 1; i++) {
        result += Math.ceil(dist[i] / speed);
    }
    return result;
}
