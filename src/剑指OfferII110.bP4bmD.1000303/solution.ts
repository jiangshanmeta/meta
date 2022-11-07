function allPathsSourceTarget (graph: number[][]): number[][] {
    const result:number[][] = [];
    const dfs = (v:number, path:number[]) => {
        path.push(v);
        if (v === graph.length - 1) {
            result.push([...path, ]);
            path.pop();
            return;
        }
        for (const nextV of graph[v]) {
            dfs(nextV, path);
        }
        path.pop();
    };
    dfs(0, []);
    return result;
}
