/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
    let result = 0;
    let start = 0;
    for (let i = 0; i < customers.length; i++) {
        const [arrival, time, ] = customers[i];
        if (arrival > start) {
            result += time;
            start = arrival + time;
        } else {
            start += time;
            result += start - arrival;
        }
    }
    return result / customers.length;
};
