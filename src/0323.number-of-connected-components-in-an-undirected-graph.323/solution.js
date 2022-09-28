/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
    const graph = {};
    for (const [from, to, ] of edges) {
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
        if (!graph[to]) {
            graph[to] = [];
        }
        graph[to].push(from);
    }

    const visited = new Array(n).fill(false);
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            continue;
        }
        result++;
        const stack = [i, ];
        while (stack.length) {
            const node = stack.pop();
            const edge = graph[node];
            if (!edge) {
                continue;
            }
            for (let j = 0; j < edge.length; j++) {
                if (visited[edge[j]]) {
                    continue;
                }
                visited[edge[j]] = true;
                stack.push(edge[j]);
            }
        }
    }
    return result;
};
