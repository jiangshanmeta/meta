/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
    const formattedEgeds = new Array(n);
    for (const [from, to, ] of edges) {
        if (!formattedEgeds[from]) {
            formattedEgeds[from] = [];
        }
        formattedEgeds[from].push(to);

        if (!formattedEgeds[to]) {
            formattedEgeds[to] = [];
        }
        formattedEgeds[to].push(from);
    }
    const visited = new Array(n).fill(false);
    const edgesCounts = [];
    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            continue;
        }
        const stack = [i, ];
        let count = 0;
        while (stack.length) {
            const node = stack.pop();
            if (visited[node]) {
                continue;
            }
            visited[node] = true;
            count++;
            stack.push(...(formattedEgeds[node] || []));
        }
        edgesCounts.push(count);
    }

    return edgesCounts.reduce((acc, item) => {
        return acc + item * (n - item) / 2;
    }, 0);
};
