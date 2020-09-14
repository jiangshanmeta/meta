/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
    const queensMap = {};
    const deltas = [
        [
            0, 1, ],
        [
            0, -1, ],
        [
            1, 0, ],
        [
            -1, 0, ],
        [
            1, 1, ],
        [
            -1, -1, ],
        [
            1, -1, ],
        [
            -1, 1, ],
    ];
    for (let i = 0; i < queens.length; i++) {
        const [
            x, y, ] = queens[i];
        queensMap[`${x},${y}`] = true;
    }

    const result = [];
    const usedQueenMap = {};

    const [
        x, y, ] = king;
    // 在各个方向寻找最近的Queen
    for (let j = 0; j < deltas.length; j++) {
        let curX = x;
        let curY = y;
        const [
            deltax, deltay, ] = deltas[j];
        while (curX + deltax > -1 && curX + deltax < 8 && curY + deltay > -1 && curY + deltay < 8) {
            curX += deltax;
            curY += deltay;
            if (usedQueenMap[`${curX},${curY}`]) {
                break;
            }
            if (queensMap[`${curX},${curY}`]) {
                usedQueenMap[`${curX},${curY}`] = true;
                result.push([
                    curX, curY, ]);
                break;
            }
        }
    }

    return result;
};
