/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
    if (grid.length === 0) {
        return 0;
    }
    const row = grid.length;
    const column = grid[0].length;

    let S = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            const item = grid[i][j];
            if (item > 0) {
                S += 2;
            }

            const rightCubeLeft = j === column - 1 ? 0 : grid[i][j + 1];
            S += Math.abs(item - rightCubeLeft);

            const downCubeUp = i === row - 1 ? 0 : grid[i + 1][j];
            S += Math.abs(item - downCubeUp);

            if (i === 0) {
                S += item;
            }
            if (j === 0) {
                S += item;
            }
        }
    }

    return S;
};
