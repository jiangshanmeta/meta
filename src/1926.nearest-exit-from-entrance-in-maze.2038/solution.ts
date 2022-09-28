function nearestExit (maze: string[][], entrance: number[]): number {
    function isEdge (x:number, y:number):boolean {
        return x === 0 || y === 0 || x === maze.length - 1 || y === maze[0].length - 1;
    }
    let nodes = [entrance, ];
    let result = 0;
    while (nodes.length) {
        const nNodes:number[][] = [];
        result++;
        for (const [x, y, ] of nodes) {
            if (maze[x][y] === '+') {
                continue;
            }
            maze[x][y] = '+';
            if (x - 1 > -1 && maze[x - 1][y] === '.') {
                if (isEdge(x - 1, y)) {
                    return result;
                }
                nNodes.push([x - 1, y, ]);
            }
            if (x + 1 < maze.length && maze[x + 1][y] === '.') {
                if (isEdge(x + 1, y)) {
                    return result;
                }
                nNodes.push([x + 1, y, ]);
            }
            if (y - 1 > -1 && maze[x][y - 1] === '.') {
                if (isEdge(x, y - 1)) {
                    return result;
                }
                nNodes.push([x, y - 1, ]);
            }
            if (y + 1 < maze[0].length && maze[x][y + 1] === '.') {
                if (isEdge(x, y + 1)) {
                    return result;
                }
                nNodes.push([x, y + 1, ]);
            }
        }
        nodes = nNodes;
    }
    return -1;
}
