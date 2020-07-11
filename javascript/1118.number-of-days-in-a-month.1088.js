/**
 * @param {number} Y
 * @param {number} M
 * @return {number}
 */
var numberOfDays = function(Y, M) {
    // 非二月都是确定的
    const map = {
        1:31,
        3:31,
        4:30,
        5:31,
        6:30,
        7:31,
        8:31,
        9:30,
        10:31,
        11:30,
        12:31,
    }
    if(M !== 2){
        return map[M];
    }
    // 闰年二月29天
    if( (Y%4 === 0 && Y%100 !== 0) || Y%400 === 0 ){
        return 29;
    }
    // 平年二月28天
    return 28;
};