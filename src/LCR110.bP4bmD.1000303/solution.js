/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    const result = [];
    const dfs = (v, path) => {
        path.push(v);
        if (v === graph.length - 1) {
            result.push([...path, ]);
            path.pop();
            return;
        }
        for (const nextV of graph[v]) {
            dfs(nextV, path);
        }

        path.pop();
    };
    dfs(0, []);

    return result;
};
