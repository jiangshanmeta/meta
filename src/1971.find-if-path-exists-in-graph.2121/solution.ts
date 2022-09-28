function validPath (n: number, edges: number[][], start: number, end: number): boolean {
    const parents:number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        parents[i] = i;
    }
    for (let [v1, v2, ] of edges) {
        if (v1 > v2) {
            const tmp = v1;
            v1 = v2;
            v2 = tmp;
        }
        let p1 = parents[v1];
        let p2 = parents[v2];
        while (parents[p1] !== p1) {
            p1 = parents[p1];
        }
        while (parents[p2] !== p2) {
            p2 = parents[p2];
        }
        const p = Math.min(p1, p2);
        parents[p1] = p;
        parents[p2] = p;
        while (v1 !== p) {
            const n = parents[v1];
            parents[v1] = p;
            v1 = n;
        }
        while (v2 !== p) {
            const n = parents[v2];
            parents[v2] = p;
            v2 = n;
        }
    }

    let p1 = parents[start];
    let p2 = parents[end];
    while (parents[p1] !== p1) {
        p1 = parents[p1];
    }
    while (parents[p2] !== p2) {
        p2 = parents[p2];
    }
    return p1 === p2;
}
