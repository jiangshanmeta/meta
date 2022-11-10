function checkIfPrerequisite (numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
    const graph = new Array<number[]>(numCourses);
    const parents = new Array<Set<number>>(numCourses);
    const visited = new Array<boolean>(numCourses).fill(false);
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
        parents[i] = new Set<number>();
    }
    for (const [from, to, ] of prerequisites) {
        graph[to].push(from);
    }
    const dfs = (v:number) => {
        visited[v] = true;
        for (const nextV of graph[v]) {
            if (!visited[nextV]) {
                dfs(nextV);
            }
            parents[v].add(nextV);
            for (const grand of parents[nextV]) {
                parents[v].add(grand);
            }
        }
    };
    for (let i = 0; i < numCourses; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    return queries.map(([u, v, ]) => {
        return parents[v].has(u);
    });
}
