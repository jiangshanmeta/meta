function closestCost (baseCosts: number[], toppingCosts: number[], target: number): number {
    // 这个dp数组的长度 因为要找距离target最近的 所以要*2 因为baseCosts中最小的可能比2*target还大 所以要求最大值
    const dp = new Array<boolean>(Math.max(2 * target, Math.min(...baseCosts)) + 1).fill(false);
    dp[0] = true;
    for (const topping of toppingCosts) {
        for (let i = dp.length - 1; i >= topping; i--) {
            dp[i] = dp[i] || dp[i - topping];
            if (!dp[i] && i - 2 * topping > -1) {
                dp[i] = dp[i - 2 * topping];
            }
        }
    }
    // 要找距离target最近的
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
}
