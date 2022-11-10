function findOrder (numCourses: number, prerequisites: number[][]): number[] {
    const graph = new Array<number[]>(numCourses);
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (const [to, from, ] of prerequisites) {
        graph[from].push(to);
    }
    const onStack = new Array<boolean>(numCourses).fill(false);
    const visited = new Array<boolean>(numCourses).fill(false);
    let hasCircle = false;
    const post:number[] = [];
    const dfs = (v:number) => {
        visited[v] = true;
        onStack[v] = true;
        for (const nextV of graph[v]) {
            if (hasCircle) {
                break;
            }
            if (!visited[nextV]) {
                dfs(nextV);
            } else if (onStack[nextV]) {
                hasCircle = true;
            }
        }
        onStack[v] = false;
        post.push(v);
    };

    for (let i = 0; i < numCourses; i++) {
        if (!visited[i] && !hasCircle) {
            dfs(i);
        }
    }
    if (hasCircle) {
        return [];
    }

    return post.reverse();
}
