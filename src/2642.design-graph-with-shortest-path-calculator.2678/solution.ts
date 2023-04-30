class Graph {
    graph:number[][][]
    constructor (public n: number, edges: number[][]) {
        this.graph = new Array<number[][]>(n);
        for (let i = 0; i < n; i++) {
            this.graph[i] = [];
        }
        for (const edge of edges) {
            this.addEdge(edge);
        }
    }

    addEdge (edge: number[]): void {
        this.graph[edge[0]].push(edge);
    }

    shortestPath (node1: number, node2: number): number {
        if (node1 === node2) {
            return 0;
        }
        const distances = new Array(this.n).fill(Infinity);
        const visited = new Array<boolean>(this.n);
        distances[node1] = 0;
        visited[node1] = true;
        for (const edge of this.graph[node1]) {
            distances[edge[1]] = Math.min(distances[edge[1]], edge[2]);
        }
        let rest = this.n - 1;
        while (rest > 0) {
            rest--;
            let minDis = Infinity;
            let minId = -1;
            for (let i = 0; i < this.n; i++) {
                if (visited[i]) {
                    continue;
                }
                if (distances[i] < minDis) {
                    minDis = distances[i];
                    minId = i;
                }
            }
            visited[minId] = true;
            if (minId === node2) {
                break;
            }
            if (minId === -1) {
                return -1;
            }
            for (const edge of this.graph[minId]) {
                distances[edge[1]] = Math.min(distances[edge[1]], edge[2] + distances[minId]);
            }
        }
        return distances[node2];
    }
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
