/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
    let staffId = n;
    let maxTime = 0;
    let lastTime = 0;
    for (const [id, endTime, ] of logs) {
        const t = endTime - lastTime;
        lastTime = endTime;
        if (t > maxTime) {
            maxTime = t;
            staffId = id;
        } else if (t === maxTime && id < staffId) {
            staffId = id;
        }
    }
    return staffId;
};
