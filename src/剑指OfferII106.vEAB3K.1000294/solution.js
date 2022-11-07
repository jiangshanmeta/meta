/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    const N = graph.length;
    const visited = new Array(N);
    const colors = new Array(N).fill(false);
    let result = true;
    const dfs = (v) => {
        if (!result) {
            return;
        }
        visited[v] = true;
        for (const nextV of graph[v]) {
            if (!visited[nextV]) {
                colors[nextV] = !colors[v];
                dfs(nextV);
            } else if (colors[v] === colors[nextV]) {
                result = false;
                return;
            }
        }
    };
    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    return result;
};
