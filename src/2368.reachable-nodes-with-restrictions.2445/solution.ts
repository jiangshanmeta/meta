function reachableNodes (n: number, edges: number[][], restricted: number[]): number {
    const graph = new Array<number[]>(n);
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (const [a, b, ] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    const visited = new Set<number>();
    const restrictedSet = new Set(restricted);
    const dfs = (v:number) => {
        if (restrictedSet.has(v)) {
            return;
        }
        visited.add(v);
        for (const nextV of graph[v]) {
            if (!visited.has(nextV)) {
                dfs(nextV);
            }
        }
    };
    dfs(0);
    return visited.size;
}
