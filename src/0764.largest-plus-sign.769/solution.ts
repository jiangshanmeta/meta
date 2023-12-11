function orderOfLargestPlusSign (n: number, mines: number[][]): number {
    const grid = new Array<number[]>(n);
    for (let i = 0; i < n; i++) {
        grid[i] = new Array<number>(n).fill(1);
    }
    for (const [x, y, ] of mines) {
        grid[x][y] = 0;
    }
    const up = new Array<number>(n).fill(0);
    const down = new Array<number[]>(n);
    for (let i = 0; i < n - 1; i++) {
        down[i] = new Array<number>(n).fill(0);
    }
    down[n - 1] = [...grid[n - 1], ];
    for (let i = n - 2; i > -1; i--) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                down[i][j] = 0;
            } else {
                down[i][j] = down[i + 1][j] + 1;
            }
        }
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                up[j]++;
            } else {
                up[j] = 0;
            }
        }
        const right = new Array<number>(n);
        right[n - 1] = grid[i][n - 1];
        for (let j = n - 2; j > -1; j--) {
            if (grid[i][j] === 0) {
                right[j] = 0;
            } else {
                right[j] = right[j + 1] + 1;
            }
        }
        let left = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                left++;
            } else {
                left = 0;
            }
            result = Math.max(result, Math.min(left, right[j], up[j], down[i][j]));
        }
    }

    return result;
}
