function restoreArray (adjacentPairs: number[][]): number[] {
    const graph = new Map<number, number[]>();
    for (const [a, b, ] of adjacentPairs) {
        if (!graph.has(a)) {
            graph.set(a, [b, ]);
        } else {
            graph.get(a)!.push(b);
        }
        if (!graph.has(b)) {
            graph.set(b, [a, ]);
        } else {
            graph.get(b)!.push(a);
        }
    }
    let startKey = 0;
    for (const [key, value, ] of graph.entries()) {
        if (value.length === 1) {
            startKey = key;
            break;
        }
    }
    const visited = new Set<number>();
    visited.add(startKey);
    const result = [startKey, ];
    const n = adjacentPairs.length + 1;
    while (result.length < n) {
        const key = result[result.length - 1];
        const nextKey = graph.get(key).find((n) => !visited.has(n));
        visited.add(nextKey);
        result.push(nextKey);
    }

    return result;
}
