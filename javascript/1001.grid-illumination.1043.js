/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function (N, lamps, queries) {
    // 两个diagonal 其实质是y+x和y-x
    const diagonalMap1 = {};
    const diagonalMap2 = {};
    const xMap = {};
    const yMap = {};
    const pointMap = {};
    // 统计点的位置
    for (let i = 0; i < lamps.length; i++) {
        const [
            x, y, ] = lamps[i];
        if (pointMap[`${x},${y}`]) {
            continue;
        }

        xMap[x] = (xMap[x] || 0) + 1;
        yMap[y] = (yMap[y] || 0) + 1;
        diagonalMap1[y - x] = (diagonalMap1[y - x] || 0) + 1;
        diagonalMap2[y + x] = (diagonalMap2[y + x] || 0) + 1;
        pointMap[`${x},${y}`] = true;
    }

    const result = [];
    for (let i = 0; i < queries.length; i++) {
        const [
            x, y, ] = queries[i];
        if (xMap[x] || yMap[y] || diagonalMap1[y - x] || diagonalMap2[y + x]) {
            result.push(1);
        } else {
            result.push(0);
        }
        // 关灯
        for (let j = -1; j < 2; j++) {
            for (let k = -1; k < 2; k++) {
                if (pointMap[`${x + j},${y + k}`]) {
                    xMap[x + j]--;
                    yMap[y + k]--;
                    diagonalMap1[y + k - x - j]--;
                    diagonalMap2[y + k + x + j]--;
                    pointMap[`${x + j},${y + k}`] = false;
                }
            }
        }
    }

    return result;
};
