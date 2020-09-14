/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
    const list = [
        a, b, c, ];
    list.sort((a, b) => a - b);
    const result = [];
    // 完全紧挨着 不能动
    if (list[1] - list[0] === 1 && list[2] - list[1] === 1) {
        result[0] = 0;
    } else if (list[1] - list[0] < 3 || list[2] - list[1] < 3) {
        // 只有一个空格 移动到这个空格 一步
        result[0] = 1;
    } else {
        // 移动一步 构成上面那种差一格的情况
        result[0] = 2;
    }

    // 最多的步数就是每次仅仅移动一格
    result[1] = list[2] - list[0] - 2;

    return result;
};
