class NeighborSum {
    private indexs:number[] = [];
    private N:number;
    private grid:number[][];
    constructor (grid: number[][]) {
        this.grid = grid;
        const N = grid.length;
        this.N = N;
        this.indexs = new Array<number>(N * N);
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                this.indexs[grid[i][j]] = i * this.N + j;
            }
        }
    }

    adjacentSum (value: number): number {
        const index = this.indexs[value];
        const y = index % this.N;
        const x = (index - y) / this.N;

        let result = 0;
        const deltas = [
            [-1, 0, ],
            [1, 0, ],
            [0, -1, ],
            [0, 1, ],
        ];

        for (const [dx, dy, ] of deltas) {
            const nx = x + dx;
            if (nx < 0 || nx === this.N) {
                continue;
            }
            const ny = y + dy;
            if (ny < 0 || ny === this.N) {
                continue;
            }
            result += this.grid[nx][ny];
        }

        return result;
    }

    diagonalSum (value: number): number {
        const index = this.indexs[value];
        const y = index % this.N;
        const x = (index - y) / this.N;

        let result = 0;
        const deltas = [
            [-1, -1, ],
            [1, 1, ],
            [1, -1, ],
            [-1, 1, ],
        ];

        for (const [dx, dy, ] of deltas) {
            const nx = x + dx;
            if (nx < 0 || nx === this.N) {
                continue;
            }
            const ny = y + dy;
            if (ny < 0 || ny === this.N) {
                continue;
            }
            result += this.grid[nx][ny];
        }

        return result;
    }
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
