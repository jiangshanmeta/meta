/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
// 暴力实现 不是最佳答案
var corpFlightBookings = function(bookings, n) {
    const result = new Array(n).fill(0);
    for(let i=0;i<bookings.length;i++){
        for(let j=bookings[i][0]-1;j<bookings[i][1];j++){
            result[j] += bookings[i][2];
        }
    }
    return result;
};