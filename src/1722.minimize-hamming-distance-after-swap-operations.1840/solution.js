/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function (source, target, allowedSwaps) {
    const graph = {};
    const N = source.length;
    for (const [a, b, ] of allowedSwaps) {
        if (!graph[a]) {
            graph[a] = [];
        }
        if (!graph[b]) {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
    const visited = new Array(N).fill(false);
    let result = 0;
    for (let i = 0; i < N; i++) {
        if (visited[i]) {
            continue;
        }
        if (!graph[i]) {
            if (source[i] !== target[i]) {
                result++;
            }
            continue;
        }
        const seq = [];
        dfs(graph, visited, seq, i);
        const sourceSeq = [];
        const targetSeq = [];
        for (let i = 0; i < seq.length; i++) {
            sourceSeq.push(source[seq[i]]);
            targetSeq.push(target[seq[i]]);
        }
        sourceSeq.sort((a, b) => a - b);
        targetSeq.sort((a, b) => a - b);

        result += seq.length - findMatch(sourceSeq, targetSeq);
    }

    return result;
};

function findMatch (source, target) {
    let index1 = 0;
    let index2 = 0;
    let result = 0;
    while (index1 < source.length && index2 < target.length) {
        if (source[index1] === target[index2]) {
            index1++;
            index2++;
            result++;
            continue;
        }
        if (source[index1] < target[index2]) {
            index1++;
        } else {
            index2++;
        }
    }
    return result;
}

function dfs (graph, visited, sequence, index) {
    if (visited[index]) {
        return;
    }
    visited[index] = true;
    sequence.push(index);
    const edges = graph[index];
    for (let i = 0; i < edges.length; i++) {
        dfs(graph, visited, sequence, edges[i]);
    }
}
