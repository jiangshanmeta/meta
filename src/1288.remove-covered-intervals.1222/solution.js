/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let index = 1;
    while (index < intervals.length) {
        const index2 = index - 1;
        let found = false;
        while (index2 > -1 && intervals[index2][1] >= intervals[index][1]) {
            if (intervals[index2][0] <= intervals[index][0]) {
                found = true;
                break;
            }
        }
        if (found) {
            intervals.splice(index, 1);
        } else {
            index++;
        }
    }

    return intervals.length;
};
