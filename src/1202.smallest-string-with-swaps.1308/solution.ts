function smallestStringWithSwaps (s: string, pairs: number[][]): string {
    const graph = new Map<number, number[]>();
    for (const [a, b, ] of pairs) {
        if (!graph.has(a)) {
            graph.set(a, []);
        }
        if (!graph.has(b)) {
            graph.set(b, []);
        }
        graph.get(a)!.push(b);
        graph.get(b)!.push(a);
    }
    const visited:boolean[] = new Array(s.length).fill(false);
    const sList = s.split('');
    for (let i = 0; i < sList.length; i++) {
        if (!graph.has(i) || visited[i]) {
            continue;
        }
        const indexs:number[] = [];
        dfs(graph, visited, indexs, i);
        const chars = indexs.map(index => sList[index]);
        chars.sort();
        indexs.sort((a, b) => a - b);
        for (let i = 0; i < indexs.length; i++) {
            sList[indexs[i]] = chars[i];
        }
    }
    return sList.join('');
}

function dfs (graph:Map<number, number[]>, visited:boolean[], indexs:number[], index:number) {
    if (visited[index]) {
        return;
    }
    visited[index] = true;
    indexs.push(index);
    const edges = graph.get(index)!;
    for (let i = 0; i < edges.length; i++) {
        dfs(graph, visited, indexs, edges[i]);
    }
}
