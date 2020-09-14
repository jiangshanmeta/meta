/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    if (cost.length === 0 || cost.length === 1) {
        return 0;
    }

    let a = 0;
    let b = 0;

    for (let i = 2; i < cost.length + 1; i++) {
        const tmp1 = a + cost[i - 2];
        a = b;
        b = Math.min(tmp1, b + cost[i - 1]);
    }

    return b;
};
