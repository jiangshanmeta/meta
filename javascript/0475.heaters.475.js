/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
// 先对房子数组和加热器数组从小到大排序
// 对于任意一个房子 找到其左右最近的加热器 距离最小值是这个加热器需要的最小半径
// 对于所有房子 需要的半径是所有房子需要的加热器半径的最大值
var findRadius = function (houses, heaters) {
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);
    let result = 0;
    let index = 0;
    for (let i = 0; i < houses.length; i++) {
        const housePos = houses[i];
        let leftDis = Infinity;
        let flag = false;
        // 找左边最近的加热器
        // 其实应该用二分的 但是每次查询都是基于上次查询的 数据量应该不至于太大 暴力搜了
        while (index < heaters.length && heaters[index] <= housePos) {
            leftDis = housePos - heaters[index];
            flag = true;
            index++;
        }
        // index此时对应第一个右边加热器
        const rightDis = index < heaters.length ? heaters[index] - housePos : Infinity;
        result = Math.max(result, Math.min(leftDis, rightDis));
        flag && index--;
    }

    return result;
};
