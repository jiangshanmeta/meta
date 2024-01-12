function makeConnected (n: number, connections: number[][]): number {
    if (connections.length < n - 1) {
        return -1;
    }
    const pIds = new Array<number>(n);
    for (let i = 0; i < n; i++) {
        pIds[i] = i;
    }
    for (const [a, b, ] of connections) {
        let pIdA = a;
        let pIdB = b;
        while (pIdA !== pIds[pIdA]) {
            pIdA = pIds[pIdA];
        }
        while (pIdB !== pIds[pIdB]) {
            pIdB = pIds[pIdB];
        }

        const cId = Math.min(pIdA, pIdB);
        pIdA = a;
        pIdB = b;
        while (pIds[pIdA] !== cId) {
            const npid = pIds[pIdA];
            pIds[pIdA] = cId;
            pIdA = npid;
        }
        while (pIds[pIdB] !== cId) {
            const npid = pIds[pIdB];
            pIds[pIdB] = cId;
            pIdB = npid;
        }
    }

    for (let i = 0; i < n; i++) {
        let pid = i;
        while (pIds[pid] !== pid) {
            pid = pIds[pid];
        }
        const fid = pid;
        pid = i;
        while (pIds[pid] !== fid) {
            const nid = pIds[pid];
            pIds[pid] = fid;
            pid = nid;
        }
    }

    return new Set(pIds).size - 1;
}
