/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
    const result = new Array(k).fill(0);
    const groupById = logs.reduce((obj, [id, time, ]) => {
        if (!obj[id]) {
            obj[id] = new Set();
        }
        obj[id].add(time);
        return obj;
    }, {});

    Object.values(groupById).forEach((set) => {
        result[set.size - 1]++;
    });

    return result;
};
