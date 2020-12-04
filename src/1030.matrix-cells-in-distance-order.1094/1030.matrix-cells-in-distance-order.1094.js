/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
    const matrix = new Array(R);
    for (let i = 0; i < R; i++) {
        matrix[i] = new Array(C).fill(false);
    }
    matrix[r0][c0] = true;
    const result = [];
    // BFS
    const queue = [
        [
            r0, c0, ], ];
    while (queue.length) {
        const node = queue.shift();
        const [
            x, y, ] = node;
        result.push(node);
        if (x > 0 && !matrix[x - 1][y]) {
            queue.push([
                x - 1, y, ]);
            matrix[x - 1][y] = true;
        }
        if (y > 0 && !matrix[x][y - 1]) {
            queue.push([
                x, y - 1, ]);
            matrix[x][y - 1] = true;
        }
        if (x < R - 1 && !matrix[x + 1][y]) {
            queue.push([
                x + 1, y, ]);
            matrix[x + 1][y] = true;
        }
        if (y < C - 1 && !matrix[x][y + 1]) {
            queue.push([
                x, y + 1, ]);
            matrix[x][y + 1] = true;
        }
    }

    return result;
};
