/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    const predMax = tickets[k];
    const succMax = tickets[k] - 1;
    let result = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (i > k) {
            result += Math.min(tickets[i], succMax);
        } else {
            result += Math.min(tickets[i], predMax);
        }
    }
    return result;
};
