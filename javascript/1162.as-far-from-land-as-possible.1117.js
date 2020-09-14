/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    // BFS
    const N = grid.length;
    const distanceGrid = [];
    const xs = [];
    const ys = [];
    for (let i = 0; i < N; i++) {
        distanceGrid[i] = new Array(N);
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 1) {
                distanceGrid[i][j] = 0;
                xs.push(i);
                ys.push(j);
            } else {
                distanceGrid[i][j] = -1;
            }
        }
    }
    if (xs.length === 0 || xs.length === N ** 2) {
        return -1;
    }
    let maxDistance = 1;
    const deltax = [
        -1, 1, 0, 0, ];
    const deltay = [
        0, 0, -1, 1, ];
    while (xs.length) {
        const x = xs.shift();
        const y = ys.shift();
        for (let i = 0; i < deltax.length; i++) {
            const newX = x + deltax[i];
            const newY = y + deltay[i];
            if (newX > -1 && newX < N && newY > -1 && newY < N && distanceGrid[newX][newY] === -1) {
                distanceGrid[newX][newY] = distanceGrid[x][y] + 1;
                maxDistance = distanceGrid[newX][newY];
                xs.push(newX);
                ys.push(newY);
            }
        }
    }

    return maxDistance;
};
