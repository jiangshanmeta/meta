function isBipartite (graph: number[][]): boolean {
    const N = graph.length;
    const visited = new Array<boolean>(N);
    const colors = new Array<boolean>(N).fill(false);
    let result = true;
    const dfs = (v:number) => {
        visited[v] = true;
        if (!result) {
            return;
        }
        for (const nextV of graph[v]) {
            if (!visited[nextV]) {
                colors[nextV] = !colors[v];
                dfs(nextV);
            } else if (colors[v] === colors[nextV]) {
                result = false;
            }
        }
    };
    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    return result;
}
