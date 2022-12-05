/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
    const dp = new Array(Math.max(2 * target, Math.min(...baseCosts)) + 1).fill(false);
    dp[0] = true;
    for (const topping of toppingCosts) {
        for (let i = dp.length - 1; i >= topping; i--) {
            dp[i] = dp[i] || dp[i - topping];
            if (!dp[i] && i - 2 * topping > -1) {
                dp[i] = dp[i - 2 * topping];
            }
        }
    }

    let left = target - 1;
    let right = target;
    while (left > -1 || right < dp.length) {
        if (right < dp.length) {
            for (const base of baseCosts) {
                if (right - base > -1 && dp[right - base]) {
                    return right;
                }
            }
            right++;
        }

        if (left > -1) {
            for (const base of baseCosts) {
                if (left - base > -1 && dp[left - base]) {
                    return left;
                }
            }
            left--;
        }
    }
    return -1;
};
