/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
    // 偷懒用API了
    let delta = new Date(date2).getTime() - new Date(date1).getTime();
    if (delta < 0) {
        delta = -delta;
    }

    return delta / (1000 * 86400);
};
