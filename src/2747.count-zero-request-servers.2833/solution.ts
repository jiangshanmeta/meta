function countServers (n: number, logs: number[][], x: number, queries: number[]): number[] {
    const queries2 = queries.map((query, index) => {
        return {
            query,
            index,
        };
    }).sort((a, b) => a.query - b.query);
    logs.sort((a, b) => a[1] - b[1]);

    const results = new Array<number>(queries.length);
    let left = 0;
    let right = 0;
    const map = new Map<number, number>();

    queries2.forEach(({ query, index, }) => {
        const min = query - x;
        const max = query;
        while (right < logs.length && logs[right][1] <= max) {
            map.set(logs[right][0], map.has(logs[right][0]) ? map.get(logs[right][0])! + 1 : 1);
            right++;
        }
        while (left < logs.length && logs[left][1] < min) {
            const c = map.get(logs[left][0])!;
            if (c === 1) {
                map.delete(logs[left][0]);
            } else {
                map.set(logs[left][0], c - 1);
            }
            left++;
        }

        results[index] = n - map.size;
    });
    return results;
}
