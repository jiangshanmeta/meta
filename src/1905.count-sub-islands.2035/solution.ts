function countSubIslands (grid1: number[][], grid2: number[][]): number {
    const M = grid1.length;
    const N = grid1[0].length;
    const visited:boolean[][] = new Array(M);
    for (let i = 0; i < M; i++) {
        visited[i] = new Array(N).fill(false);
    }
    const match:(x:number, y:number)=>boolean = (x, y) => {
        if (x === -1 || y === -1 || x === M || y === N || visited[x][y] || grid2[x][y] === 0) {
            return true;
        }
        visited[x][y] = true;
        if (grid1[x][y] === 0) {
            return false;
        }
        return match(x, y - 1) && match(x, y + 1) && match(x - 1, y) && match(x + 1, y);
    };

    const fill:(x:number, y:number)=>void = (x, y) => {
        if (x === -1 || y === -1 || x === M || y === N || grid2[x][y] === 0) {
            return;
        }
        grid2[x][y] = 0;
        fill(x, y - 1);
        fill(x, y + 1);
        fill(x - 1, y);
        fill(x + 1, y);
    };

    let result = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid1[i][j] && grid2[i][j]) {
                if (match(i, j)) {
                    result++;
                }
                fill(i, j);
            }
        }
    }

    return result;
}
