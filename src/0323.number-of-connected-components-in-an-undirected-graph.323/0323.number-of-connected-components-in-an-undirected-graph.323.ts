function countComponents (n: number, edges: number[][]): number {
    const map = new Map<number, number[]>();
    for (const [a, b, ] of edges) {
        if (!map.has(a)) {
            map.set(a, []);
        }
        map.get(a).push(b);
        if (!map.has(b)) {
            map.set(b, []);
        }
        map.get(b).push(a);
    }
    const visited:boolean[] = new Array(n).fill(false);
    let result = 0;
    for (let i = 0; i < visited.length; i++) {
        if (visited[i]) {
            continue;
        }
        result++;
        visited[i] = true;
        const stack = [i, ];
        while (stack.length) {
            const node = stack.pop();
            if (map.has(node)) {
                const edges = map.get(node);
                for (const edge of edges) {
                    if (visited[edge]) {
                        continue;
                    }
                    stack.push(edge);
                    visited[edge] = true;
                }
            }
        }
    }
    return result;
}
