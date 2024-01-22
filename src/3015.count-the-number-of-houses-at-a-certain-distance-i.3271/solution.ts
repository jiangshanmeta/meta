function countOfPairs (n: number, x: number, y: number): number[] {
    const graph = new Array<number[]>(n);
    for (let i = 0; i < n; i++) {
        graph[i] = new Array<number>(n).fill(Infinity);
    }
    for (let i = 0; i < n - 1; i++) {
        graph[i][i + 1] = 1;
        graph[i + 1][i] = 1;
    }
    graph[x - 1][y - 1] = 1;
    graph[y - 1][x - 1] = 1;
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph[i][j] > graph[i][k] + graph[k][j]) {
                    graph[i][j] = graph[i][k] + graph[k][j];
                }
            }
        }
    }
    const result = new Array<number>(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            result[graph[i][j] - 1] += 2;
        }
    }

    return result;
}
