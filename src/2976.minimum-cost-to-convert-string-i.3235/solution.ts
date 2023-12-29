function minimumCost (source: string, target: string, original: string[], changed: string[], cost: number[]): number {
    const graph = new Array<number[]>(26);
    for (let i = 0; i < 26; i++) {
        graph[i] = new Array<number>(26).fill(Infinity);
        graph[i][i] = 0;
    }
    for (let i = 0; i < original.length; i++) {
        const x = original[i].charCodeAt(0) - 97;
        const y = changed[i].charCodeAt(0) - 97;
        graph[x][y] = Math.min(graph[x][y], cost[i]);
    }
    for (let k = 0; k < 26; k++) {
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < 26; j++) {
                if (graph[i][k] + graph[k][j] < graph[i][j]) {
                    graph[i][j] = graph[i][k] + graph[k][j];
                }
            }
        }
    }
    let sum = 0;
    for (let i = 0; i < source.length; i++) {
        const x = source.charCodeAt(i) - 97;
        const y = target.charCodeAt(i) - 97;
        if (graph[x][y] === Infinity) {
            return -1;
        }
        sum += graph[x][y];
    }
    return sum;
}
