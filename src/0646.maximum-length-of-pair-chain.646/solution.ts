function findLongestChain (pairs: number[][]): number {
    // 按照数对右侧值从小到大排序
    pairs.sort((a, b) => a[1] - b[1]);
    // 已经形成的数对链最小右侧值
    let minRight = pairs[0][1];
    let result = 1;
    for (let i = 1; i < pairs.length; i++) {
        // 当前数对左侧值比之前数对链右侧最小值大
        // 数对链长度+1
        // 由于按照右侧值排序 当前数对右侧值就是当前数对链长度下最小的右侧值
        if (pairs[i][0] > minRight) {
            result++;
            minRight = pairs[i][1];
        }
    }
    return result;
}
