/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    amount.sort((a, b) => a - b);
    if (amount[0] + amount[1] <= amount[2]) {
        return amount[2];
    }

    return amount[2] + Math.ceil((amount[0] + amount[1] - amount[2]) / 2);
};
