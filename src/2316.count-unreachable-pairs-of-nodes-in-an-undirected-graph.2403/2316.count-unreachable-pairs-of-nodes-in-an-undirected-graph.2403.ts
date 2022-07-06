function countPairs (n: number, edges: number[][]): number {
    const formattedEgeds = new Array<number[]>(n);
    for (const [from, to, ] of edges) {
        if (!formattedEgeds[from]) {
            formattedEgeds[from] = [];
        }
        formattedEgeds[from].push(to);

        if (!formattedEgeds[to]) {
            formattedEgeds[to] = [];
        }
        formattedEgeds[to].push(from);
    }
    const visited = new Array<boolean>(n).fill(false);
    const edgesCounts:number[] = [];
    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            continue;
        }
        const stack:number[] = [i, ];
        let count = 0;
        while (stack.length) {
            const node = stack.pop();
            if (visited[node]) {
                continue;
            }
            visited[node] = true;
            count++;
            stack.push(...(formattedEgeds[node] || []));
        }
        edgesCounts.push(count);
    }

    return edgesCounts.reduce((acc, item) => {
        return acc + item * (n - item) / 2;
    }, 0);
}
