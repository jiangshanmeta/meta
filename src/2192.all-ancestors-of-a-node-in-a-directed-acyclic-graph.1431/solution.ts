function getAncestors (n: number, edges: number[][]): number[][] {
    const graph = new Array<number[]>(n);
    const result = new Array<number[]>();
    for (let i = 0; i < graph.length; i++) {
        graph[i] = [];
    }
    for (const [from, to, ] of edges) {
        graph[to].push(from);
    }
    const dfs = (v:number) => {
        if (result[v]) {
            return result[v];
        }
        const parents = new Array<number>();

        for (const from of graph[v]) {
            parents.push(from);
            parents.push(...dfs(from));
        }
        result[v] = [...new Set(parents), ].sort((a, b) => a - b);
        return result[v];
    };
    for (let i = 0; i < n; i++) {
        result[i] = dfs(i);
    }

    return result;
}
