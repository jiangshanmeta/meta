/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function (chips) {
    // 其实就是所有在偶数位置的都可以无代价移动到一起 所有奇数位置的都可以无代价移动到一起
    // 剩下的只是看奇数位置的少还是偶数位置的少
    let oddCount = 0;
    for (let i = 0; i < chips.length; i++) {
        if (chips[i] % 2) {
            oddCount++;
        }
    }
    return Math.min(oddCount, chips.length - oddCount);
};
