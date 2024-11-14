/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const N = isConnected.length;
    const parents = new Array(N);
    for (let i = 0; i < N; i++) {
        parents[i] = i;
    }
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (isConnected[i][j] === 0) {
                continue;
            }
            let pi = parents[i];
            let pj = parents[j];
            while (parents[pi] !== pi) {
                pi = parents[pi];
            }
            while (parents[pj] !== pj) {
                pj = parents[pj];
            }
            const p = Math.min(pi, pj);
            parents[pi] = p;
            parents[pj] = p;

            pi = parents[i];
            pj = parents[j];
            while (pi !== p) {
                const n = parents[pi];
                parents[pi] = p;
                pi = n;
            }
            while (pj !== p) {
                const n = parents[pj];
                parents[pj] = p;
                pj = n;
            }
        }
    }

    for (let i = 0; i < N; i++) {
        let pi = parents[i];
        while (pi !== parents[pi]) {
            pi = parents[pi];
        }
        parents[i] = pi;
    }
    return new Set(parents).size;
};
