function closestMeetingNode (edges: number[], node1: number, node2: number): number {
    const disMap1 = new Map<number, number>();
    const disMap2 = new Map<number, number>();
    let distance = 0;
    let finalMinDis = 2 * edges.length;
    let result = edges.length;

    while (node1 !== -1 || node2 !== -1) {
        if (node1 !== -1) {
            disMap1.set(node1, distance);
        }
        if (node2 !== -1) {
            disMap2.set(node2, distance);
        }
        if (disMap2.has(node1)) {
            const dis = Math.max(disMap1.get(node1), disMap2.get(node1));
            if (dis < finalMinDis) {
                finalMinDis = dis;
                result = node1;
            } else if (dis === finalMinDis && node1 < result) {
                result = node1;
            }
        }
        if (disMap1.has(node2)) {
            const dis = Math.max(disMap2.get(node2), disMap1.get(node2));
            if (dis < finalMinDis) {
                finalMinDis = dis;
                result = node2;
            } else if (dis === finalMinDis && node2 < result) {
                result = node2;
            }
        }
        if (node1 !== -1) {
            node1 = edges[node1];
        }
        if (node2 !== -1) {
            node2 = edges[node2];
        }

        if (disMap1.has(node1)) {
            node1 = -1;
        }
        if (disMap2.has(node2)) {
            node2 = -1;
        }
        distance++;
    }

    return result === edges.length ? -1 : result;
}
