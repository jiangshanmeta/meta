function mostProfitablePath (edges: number[][], bob: number, amount: number[]): number {
    const graph = new Array<number[]>(amount.length);
    for (let i = 0; i < amount.length; i++) {
        graph[i] = [];
    }

    for (const [a, b, ] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    function findBobPath () {
        const visited = new Array<boolean>(amount.length).fill(false);
        const dfs = (node:number, path:number[]) => {
            path.push(node);
            visited[node] = true;
            if (node === 0) {
                return true;
            }
            for (const nextV of graph[node]) {
                if (!visited[nextV]) {
                    const rst = dfs(nextV, path);
                    if (rst) {
                        return true;
                    }
                }
            }
            path.pop();

            return false;
        };
        const path:number[] = [];
        dfs(bob, path);
        return path;
    }
    const path = findBobPath();

    let result = -Infinity;
    const visited = new Array<boolean>(amount.length).fill(false);
    const dfs = (node:number, depth:number, current:number) => {
        visited[node] = true;
        const index = path.indexOf(node);
        if (index === -1 || index > depth) {
            current += amount[node];
        } else if (index === depth) {
            current += amount[node] / 2;
        }

        let isLeaf = true;

        for (const nextV of graph[node]) {
            if (!visited[nextV]) {
                isLeaf = false;
                dfs(nextV, depth + 1, current);
            }
        }
        if (isLeaf) {
            result = Math.max(result, current);
        }
    };
    dfs(0, 0, 0);

    return result;
}
