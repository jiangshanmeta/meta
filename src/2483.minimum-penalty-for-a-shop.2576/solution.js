/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
    let Y = 0;
    let N = 0;
    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            Y++;
        }
    }
    let minPenalty = customers.length - Y;
    let minTime = customers.length;
    for (let i = 0; i < customers.length; i++) {
        const penalty = Y + N;
        if (penalty < minPenalty) {
            minPenalty = penalty;
            minTime = i;
        } else if (penalty === minPenalty && minTime === customers.length) {
            minTime = i;
        }
        if (customers[i] === 'Y') {
            Y--;
        } else {
            N++;
        }
    }
    return minTime;
};
