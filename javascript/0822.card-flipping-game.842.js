/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function (fronts, backs) {
    // 一个数item为good则意味着任意i fronts[i]和backs[i]不能同时为item
    const arr = [];
    const map = {};
    const flagMap = {};
    for (let i = 0; i < fronts.length; i++) {
        // map只是为了少点不必要的运算
        // arr收集所有unique的元素
        if (map[fronts[i]] === undefined) {
            map[fronts[i]] = true;
            arr.push(fronts[i]);
        }
        if (map[backs[i]] === undefined) {
            map[backs[i]] = true;
            arr.push(backs[i]);
        }
        if (fronts[i] === backs[i]) {
            flagMap[fronts[i]] = true;
        }
    }
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (flagMap[arr[i]] === undefined) {
            return arr[i];
        }
    }
    return 0;
};
