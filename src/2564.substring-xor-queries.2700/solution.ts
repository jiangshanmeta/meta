function substringXorQueries (s: string, queries: number[][]): number[][] {
    const map = new Map<number, number>();
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            if (!map.has(0)) {
                map.set(0, i);
            }
            continue;
        }
        let acc = 0;
        for (let j = i; j < Math.min(i + 32, s.length); j++) {
            acc = acc * 2 + (+s[j]);
            if (!map.has(acc)) {
                map.set(acc, i);
            }
        }
    }
    return queries.map(([first, second, ]) => {
        const target = first ^ second;
        if (!map.has(target)) {
            return [-1, -1, ];
        }
        const start = map.get(target)!;
        return [start, start + target.toString(2).length - 1, ];
    });
}
