/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    const N = grid.length;
    // 看起点和终点是否是空的
    if (grid[0][0] === 1 || grid[N - 1][N - 1] === 1) {
        return -1;
    }
    let count = 1;
    let level = [
        [
            0, 0, ], ];
    // 2标记已探索
    grid[0][0] = 2;
    while (true) {
        const nextLevel = [];
        count++;
        for (let i = 0; i < level.length; i++) {
            const [
                x, y, ] = level[i];
            // 探索周边的方格
            for (let j = -1; j < 2; j++) {
                const newX = x + j;
                if (newX === -1 || newX === N) {
                    continue;
                }
                for (let k = -1; k < 2; k++) {
                    const newY = y + k;
                    if (newY === -1 || newY === N) {
                        continue;
                    }
                    if (newX === N - 1 && newY === N - 1) {
                        return count;
                    }
                    if (grid[newX][newY] === 0) {
                        grid[newX][newY] = 2;
                        nextLevel.push([
                            newX, newY, ]);
                    }
                }
            }
        }
        if (nextLevel.length === 0) {
            return -1;
        }
        level = nextLevel;
    }
};
