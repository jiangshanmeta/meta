function mergeSimilarItems (items1: number[][], items2: number[][]): number[][] {
    const map = new Map<number, number>();
    for (const [value, weight, ] of items1) {
        map.set(value, weight);
    }
    for (const [value, weight, ] of items2) {
        if (map.has(value)) {
            map.set(value, map.get(value) + weight);
        } else {
            map.set(value, weight);
        }
    }
    return [...map.entries(), ].sort((a, b) => a[0] - b[0]);
}
