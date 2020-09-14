/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
    // 题目限定age最大为120 按照年龄聚合
    const arr = new Array(121).fill(0);
    for (let i = 0; i < ages.length; i++) {
        arr[ages[i]]++;
    }
    let count = 0;
    // 从15开始因为要满足条件1
    for (let i = 15; i < 121; i++) {
        const countI = arr[i];
        if (countI === 0) {
            continue;
        }
        // 处理比自己小的情况
        const min = (i / 2 + 7) | 0;
        for (let j = min + 1; j < i; j++) {
            count += countI * arr[j];
        }
        // 处理同岁的情况(排列组合)
        count += countI * (countI - 1);
    }
    return count;
};
