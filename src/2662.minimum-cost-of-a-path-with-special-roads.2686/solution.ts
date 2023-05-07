function minimumCost (start: number[], target: number[], specialRoads: number[][]): number {
    const map = new Map<string, number>();
    map.set(`${start[0]},${start[1]}`, 0);
    map.set(`${target[0]},${target[1]}`, 1);
    let index = 2;

    const edges = [
        [0, 1, Math.abs(target[0] - start[0]) + Math.abs(target[1] - start[1]), ],
    ];
    if (edges[0][2] === 0) {
        return 0;
    }

    for (let i = 0; i < specialRoads.length; i++) {
        let [x1, y1, x2, y2, cost, ] = specialRoads[i];
        const key1 = `${x1},${y1}`;
        const key2 = `${x2},${y2}`;
        cost = Math.min(cost, Math.abs(x1 - x2) + Math.abs(y1 - y2));
        if (!map.has(key1)) {
            map.set(key1, index++);
        }
        if (!map.has(key2)) {
            map.set(key2, index++);
        }
        const id1 = map.get(key1)!;
        const id2 = map.get(key2)!;
        edges.push([
            id1,
            id2,
            cost,
        ]);
        const costA = Math.abs(x1 - start[0]) + Math.abs(y1 - start[1]);
        edges.push([
            0,
            id1,
            costA,
        ]);
        edges.push([
            id1,
            0,
            costA,
        ]);
        const costB = Math.abs(x2 - target[0]) + Math.abs(y2 - target[1]);
        edges.push([1, id2, costB, ]);
        edges.push([id2, 1, costB, ]);

        for (let j = 0; j < i; j++) {
            const [x4, y4, x3, y3, ] = specialRoads[j];
            const dis1 = Math.abs(x3 - x1) + Math.abs(y3 - y1);
            const key3 = `${x3},${y3}`;
            edges.push([map.get(key3)!, id1, dis1, ]);
            const dis2 = Math.abs(x4 - x2) + Math.abs(y4 - y2);
            const key4 = `${x4},${y4}`;
            edges.push([id2, map.get(key4)!, dis2, ]);
        }
    }

    const groupEdges = new Array<number[][]>(index);
    for (let i = 0; i < groupEdges.length; i++) {
        groupEdges[i] = [];
    }
    for (const edge of edges) {
        groupEdges[edge[0]].push(edge);
    }
    const dists = new Array<number>(index).fill(Infinity);
    dists[0] = 0;
    const finished = new Array<boolean>(index);
    finished[0] = true;
    let rest = index - 1;
    for (const [_, end, cost, ] of groupEdges[0]) {
        dists[end] = Math.min(cost, dists[end]);
    }

    while (rest > 0) {
        let minDis = Infinity;
        let minId = -1;
        for (let i = 0; i < dists.length; i++) {
            if (finished[i]) {
                continue;
            }
            if (dists[i] < minDis) {
                minDis = dists[i];
                minId = i;
            }
        }
        finished[minId] = true;
        rest--;
        for (const [_, next, cost, ] of groupEdges[minId]) {
            dists[next] = Math.min(dists[next], dists[minId] + cost);
        }
    }

    return dists[1];
}
