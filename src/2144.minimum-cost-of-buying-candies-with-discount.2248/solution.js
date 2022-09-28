/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a);
    let result = 0;
    let index = 0;
    while (index + 1 < cost.length) {
        result += cost[index++];
        result += cost[index];
        index += 2;
    }
    while (index < cost.length) {
        result += cost[index++];
    }
    return result;
};
