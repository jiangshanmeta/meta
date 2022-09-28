/**
 * @param {number[][]} grid
 * @return {number}
 */
function hasRelative (grid, i, j) {
    if (i > 0) {
        if (grid[i - 1][j] === 2 || grid[i - 1][j] === 1) {
            return true;
        }
    }
    if (j > 0) {
        if (grid[i][j - 1] === 2 || grid[i][j - 1] === 1) {
            return true;
        }
    }
    if (i < grid.length - 1) {
        if (grid[i + 1][j] === 2 || grid[i + 1][j] === 1) {
            return true;
        }
    }
    if (j < grid[0].length - 1) {
        if (grid[i][j + 1] === 2 || grid[i][j + 1] === 1) {
            return true;
        }
    }

    return false;
}

var orangesRotting = function (grid) {
    let count = 0;
    let pos = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) {
                continue;
            } else if (grid[i][j] === 1) {
                count++;
                // 看周围是否有1或者2 没有就-1
                if (!hasRelative(grid, i, j)) {
                    return -1;
                }
            } else {
                pos.push([
                    i, j, ]);
            }
        }
    }
    console.log(pos, count);
    if (count === 0) {
        return 0;
    }
    if (pos.length === 0) {
        return -1;
    }

    let result = 0;
    while (count) {
        result++;
        if (pos.length === 0) {
            return -1;
        }
        const nextPos = [];
        for (let i = 0; i < pos.length; i++) {
            const [
                x, y, ] = pos[i];
            if (x > 0 && grid[x - 1][y] === 1) {
                count--;
                grid[x - 1][y] = 2;
                nextPos.push([
                    x - 1, y, ]);
            }
            if (y > 0 && grid[x][y - 1] === 1) {
                count--;
                grid[x][y - 1] = 2;
                nextPos.push([
                    x, y - 1, ]);
            }
            if (x < grid.length - 1 && grid[x + 1][y] === 1) {
                count--;
                grid[x + 1][y] = 2;
                nextPos.push([
                    x + 1, y, ]);
            }
            if (y < grid[0].length - 1 && grid[x][y + 1] === 1) {
                count--;
                grid[x][y + 1] = 2;
                nextPos.push([
                    x, y + 1, ]);
            }
        }
        pos = nextPos;
    }

    return result;
};
