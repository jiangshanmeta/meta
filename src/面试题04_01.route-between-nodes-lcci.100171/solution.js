/**
 * @param {number} n
 * @param {number[][]} graph
 * @param {number} start
 * @param {number} target
 * @return {boolean}
 */
var findWhetherExistsPath = function (n, graph, start, target) {
    const graphMap = {};
    for (let i = 0; i < graph.length; i++) {
        const [
            from, to, ] = graph[i];
        if (from === to) {
            continue;
        }
        if (!graphMap[from]) {
            graphMap[from] = [];
        }
        graphMap[from].push(to);
    }

    const used = new Array(n).fill(false);
    used[start] = true;
    return dfs(graphMap, start, target, used);
};

function dfs (graphMap, from, target, used) {
    if (!graphMap[from]) {
        return false;
    }
    for (const to of graphMap[from]) {
        if (used[to]) {
            continue;
        }
        if (to === target) {
            return true;
        }
        used[to] = true;
        if (dfs(graphMap, to, target, used)) {
            return true;
        }
    }
    return false;
}
