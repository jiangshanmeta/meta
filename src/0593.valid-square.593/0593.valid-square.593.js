/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    const lengthMap = {};
    const points = [
        p1, p2, p3, p4, ];
    // 求两点之间的距离
    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < 4; j++) {
            const dis = (points[j][0] - points[i][0]) ** 2 + (points[j][1] - points[i][1]) ** 2;
            if (dis === 0) {
                return false;
            }
            if (lengthMap[dis] === undefined) {
                lengthMap[dis] = 1;
            } else {
                lengthMap[dis]++;
            }
        }
    }
    // 总共有两个长度 一个数量是4(边) 一个数量是2(对角线)
    const lengths = Object.keys(lengthMap);
    if (lengths.length !== 2) {
        return false;
    }
    return lengthMap[lengths[0]] === 4 || lengthMap[lengths[1]] === 4;
};
