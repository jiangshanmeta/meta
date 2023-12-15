function countCompleteComponents (n: number, edges: number[][]): number {
    const graph = new Array<number[]>(n);
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (const [a, b, ] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    const visited = new Array<boolean>(n);
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            continue;
        }
        const stack = [i, ];
        visited[i] = true;
        const all:number[] = [];
        while (stack.length) {
            const a = stack.pop()!;
            all.push(a);
            for (let j = 0; j < graph[a].length; j++) {
                if (visited[graph[a][j]]) {
                    continue;
                }
                stack.push(graph[a][j]);
                visited[graph[a][j]] = true;
            }
        }
        let match = true;
        for (const j of all) {
            if (graph[j].length !== all.length - 1) {
                match = false;
                break;
            }
        }
        if (match) {
            result++;
        }
    }

    return result;
}
