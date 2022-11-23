/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
    const graph = new Array(amount.length);
    for (let i = 0; i < amount.length; i++) {
        graph[i] = [];
    }

    for (const [a, b, ] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    function findBobPath () {
        const visited = new Array(amount.length);
        const dfs = (node, path) => {
            path.push(node);
            visited[node] = true;
            if (node === 0) {
                return true;
            }
            for (const nextV of graph[node]) {
                if (!visited[nextV]) {
                    const rst = dfs(nextV, path);
                    if (rst) {
                        return true;
                    }
                }
            }
            path.pop();

            return false;
        };
        const path = [];
        dfs(bob, path);
        return path;
    }
    const path = findBobPath();

    let result = -Infinity;
    const visited = new Array(amount.length).fill(false);
    const dfs = (node, depth, current) => {
        visited[node] = true;
        const index = path.indexOf(node);
        if (index === -1 || index > depth) {
            current += amount[node];
        } else if (index === depth) {
            current += amount[node] / 2;
        }

        let isLeaf = true;

        for (const nextV of graph[node]) {
            if (!visited[nextV]) {
                isLeaf = false;
                dfs(nextV, depth + 1, current);
            }
        }
        if (isLeaf) {
            result = Math.max(result, current);
        }
    };
    dfs(0, 0, 0);

    return result;
};
