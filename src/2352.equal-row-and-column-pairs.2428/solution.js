/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const N = grid.length;
    const map = new Map();
    for (let i = 0; i < N; i++) {
        const key = grid[i].join(',');
        if (map.has(key)) {
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }
    let result = 0;
    for (let j = 0; j < N; j++) {
        const col = [];
        for (let i = 0; i < N; i++) {
            col.push(grid[i][j]);
        }
        const key = col.join(',');
        if (map.has(key)) {
            result += map.get(key);
        }
    }
    return result;
};
