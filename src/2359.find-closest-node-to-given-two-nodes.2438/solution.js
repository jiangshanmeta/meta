/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
    let distance = 0;
    const disMap1 = new Map();
    const disMap2 = new Map();
    let MIN_DIS = edges.length;
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
            if (dis < MIN_DIS) {
                MIN_DIS = dis;
                result = node1;
            } else if (dis === MIN_DIS && node1 < result) {
                result = node1;
            }
        }

        if (disMap1.has(node2)) {
            const dis = Math.max(disMap1.get(node2), disMap2.get(node2));
            if (dis < MIN_DIS) {
                MIN_DIS = dis;
                result = node2;
            } else if (dis === MIN_DIS && node2 < result) {
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
};
