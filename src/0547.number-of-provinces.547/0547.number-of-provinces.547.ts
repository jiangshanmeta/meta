function findCircleNum (isConnected: number[][]): number {
    const N = isConnected.length;
    const visited:boolean[] = new Array(N).fill(false);
    let result = 0;
    for (let i = 0; i < N; i++) {
        if (visited[i]) {
            continue;
        }
        result++;
        dfs(i, visited, isConnected);
    }
    return result;
}

function dfs (i:number, visited:boolean[], isConnected:number[][]) {
    visited[i] = true;
    for (let j = 0; j < isConnected.length; j++) {
        if (isConnected[i][j] && !visited[j]) {
            dfs(j, visited, isConnected);
        }
    }
}
