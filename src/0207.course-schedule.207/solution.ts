function canFinish (numCourses: number, prerequisites: number[][]): boolean {
    const graph = new Array<number[]>(numCourses);
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (const [to, from, ] of prerequisites) {
        graph[from].push(to);
    }
    const visited = new Array<boolean>(numCourses);
    const onStack = new Array<boolean>(numCourses);
    let result = true;
    const dfs = (v:number) => {
        if (!result) {
            return;
        }
        onStack[v] = true;
        visited[v] = true;
        for (const nextV of graph[v]) {
            if (!visited[nextV]) {
                dfs(nextV);
            } else if (onStack[nextV]) {
                result = false;
            }
        }
        onStack[v] = false;
    };
    for (let i = 0; i < numCourses; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    return result;
}
