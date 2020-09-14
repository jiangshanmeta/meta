/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// 这题就是最大子列和 和leetcode 53一个思路
var canCompleteCircuit = function (gas, cost) {
    // list存的是这一个加油站到下个加油站能贡献多少剩余汽油
    let list = new Array(gas.length);
    for (let i = 0; i < gas.length; i++) {
        list[i] = gas[i] - cost[i];
    }
    const L = gas.length;
    // 复制一倍 处理环
    list = list.concat(list);

    // 最大子列和
    let curSum = 0;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (curSum + list[i] < 0) {
            curSum = 0;
            count = 0;
            continue;
        }
        curSum += list[i];
        count++;
        // 剩余油量非负 且长度为L 构成子列
        if (count === L) {
            return i - L + 1;
        }
    }
    return -1;
};
