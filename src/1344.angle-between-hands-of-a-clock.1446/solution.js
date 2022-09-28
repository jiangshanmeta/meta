/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    // 小学数学题
    const degreeMinute = minutes * 6;
    const degreeHour = (hour + minutes / 60) * 30;
    const result = Math.abs(degreeHour - degreeMinute);

    return result > 180 ? 360 - result : result;
};
