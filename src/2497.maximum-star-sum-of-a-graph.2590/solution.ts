function maxStarSum (vals: number[], edges: number[][], k: number): number {
    const N = vals.length;
    const neighbours = new Array<number[]>(N);
    for (let i = 0; i < N; i++) {
        neighbours[i] = [];
    }
    for (const [a, b, ] of edges) {
        neighbours[a].push(vals[b]);
        neighbours[b].push(vals[a]);
    }

    const stars = neighbours.map((counts, index) => {
        let result = vals[index];
        counts.sort((a, b) => b - a);
        for (let i = 0; i < Math.min(k, counts.length); i++) {
            if (counts[i] < 0) {
                break;
            }
            result += counts[i];
        }
        return result;
    });

    return Math.max(...stars);
}
