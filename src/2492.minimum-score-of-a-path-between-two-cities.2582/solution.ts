function minScore (n: number, roads: number[][]): number {
    const graph = new Array<number[][]>(n + 1);
    for (let i = 1; i < graph.length; i++) {
        graph[i] = [];
    }
    for (const road of roads) {
        graph[road[0]].push(road);
        graph[road[1]].push(road);
    }
    const visited = new Array<boolean>(n + 1).fill(false);
    visited[1] = true;
    const stack = [1, ];
    let result = graph[1][0][2];
    while (stack.length) {
        const node = stack.pop();
        for (const road of graph[node]) {
            result = Math.min(result, road[2]);
            if (road[0] === node) {
                if (!visited[road[1]]) {
                    visited[road[1]] = true;
                    stack.push(road[1]);
                }
            } else {
                if (!visited[road[0]]) {
                    visited[road[0]] = true;
                    stack.push(road[0]);
                }
            }
        }
    }
    return result;
}
