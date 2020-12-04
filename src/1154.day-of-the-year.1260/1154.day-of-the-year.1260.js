/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    const days = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, ];
    const year = +date.substring(0, 4);
    const month = +date.substring(5, 7);
    let result = +date.substring(8);
    for (let i = 0; i < month - 1; i++) {
        result += days[i];
    }
    // 处理闰年
    if (month > 2 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
        result++;
    }
    return result;
};
