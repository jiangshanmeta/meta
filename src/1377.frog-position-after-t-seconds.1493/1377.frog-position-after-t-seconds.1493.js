/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function (n, edges, t, target) {
    const tree = {};
    const visited = new Array(n + 1).fill(false);
    visited[1] = true;
    for (let i = 0; i < edges.length; i++) {
        const [
            from, to, ] = edges[i];
        if (!tree[from]) {
            tree[from] = [];
        }
        if (!tree[to]) {
            tree[to] = [];
        }
        tree[from].push(to);
        tree[to].push(from);
    }
    const path = [];
    findPath(1, target, tree, path, visited);
    if (t + 1 < path.length) {
        return 0;
    }
    visited.fill(false);

    let result = 1;
    for (let i = 0; i < path.length - 1; i++) {
        visited[path[i]] = true;
        let count = 0;
        for (let j = 0; j < tree[path[i]].length; j++) {
            const point = tree[path[i]][j];
            if (!visited[point]) {
                visited[point] = true;
                count++;
            }
        }

        result *= count;
    }
    if (t + 1 > path.length && tree[target]) {
        for (let i = 0; i < tree[target].length; i++) {
            if (!visited[tree[target][i]]) {
                return 0;
            }
        }
    }

    return 1 / result;
};
// 无向图找路径
function findPath (from, target, tree, path, visited) {
    path.push(from);
    visited[from] = true;
    if (from === target) {
        return true;
    }
    if (!tree[from]) {
        visited[from] = false;
        path.pop();
        return false;
    }
    for (let i = 0; i < tree[from].length; i++) {
        if (visited[tree[from][i]]) {
            continue;
        }
        if (findPath(tree[from][i], target, tree, path, visited)) {
            return true;
        }
    }
    visited[from] = false;
    path.pop();
    return false;
}
