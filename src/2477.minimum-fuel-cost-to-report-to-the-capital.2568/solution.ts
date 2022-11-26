function minimumFuelCost (roads: number[][], seats: number): number {
    let result = 0;
    const N = roads.length + 1;
    const graph = new Array<number[]>(N);
    for (let i = 0; i < N; i++) {
        graph[i] = [];
    }
    for (const [a, b, ] of roads) {
        graph[a].push(b);
        graph[b].push(a);
    }
    const visited = new Array<boolean>(N).fill(false);

    const dfs = (v:number) => {
        visited[v] = true;
        let count = 1;
        for (const nextV of graph[v]) {
            if (visited[nextV]) {
                continue;
            }
            const people = dfs(nextV);
            result += Math.ceil(people / seats);
            count += people;
        }

        return count;
    };
    dfs(0);

    return result;
}
