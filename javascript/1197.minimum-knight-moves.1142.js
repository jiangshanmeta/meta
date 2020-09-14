/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {
    // 暴力算的 然而有数学解 看不懂
    x = Math.abs(x);
    y = Math.abs(y);
    const deltaMap = {
        '0,0': 0,
    };
    let count = 0;
    const deltas = [
        [
            1, 2, ], [
            2, 1, ],
        [
            1, -2, ], [
            2, -1, ],
        [
            -1, 2, ], [
            -2, 1, ],
        [
            -1, -2, ], [
            -2, -1, ],
    ];
    let last = [
        [
            0, 0, ], ];
    while (true) {
        const next = [];
        for (let i = 0; i < last.length; i++) {
            const [
                curX, curY, ] = last[i];
            if (curX === x && curY === y) {
                return count;
            }
            for (let j = 0; j < deltas.length; j++) {
                if (deltaMap[`${curX + deltas[j][0]},${curY + deltas[j][1]}`] === undefined) {
                    deltaMap[`${curX + deltas[j][0]},${curY + deltas[j][1]}`] = count;
                    next.push([
                        curX + deltas[j][0], curY + deltas[j][1],
                    ]);
                }
            }
        }
        count++;
        last = next;
    }
};
