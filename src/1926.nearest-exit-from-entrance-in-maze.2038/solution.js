/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    let result = 0;
    let nodes = [entrance, ];

    function isExit (x, y) {
        return x === 0 || y === 0 || x === maze.length - 1 || y === maze[0].length - 1;
    }

    while (nodes.length) {
        result++;
        const nNodes = [];
        for (const [x, y, ] of nodes) {
            if (maze[x][y] === '+') {
                continue;
            }
            maze[x][y] = '+';
            if (x + 1 < maze.length && maze[x + 1][y] === '.') {
                if (isExit(x + 1, y)) {
                    return result;
                }
                nNodes.push([x + 1, y, ]);
            }
            if (x - 1 > -1 && maze[x - 1][y] === '.') {
                if (isExit(x - 1, y)) {
                    return result;
                }
                nNodes.push([x - 1, y, ]);
            }
            if (y + 1 < maze[0].length && maze[x][y + 1] === '.') {
                if (isExit(x, y + 1)) {
                    return result;
                }
                nNodes.push([x, y + 1, ]);
            }
            if (y - 1 > -1 && maze[x][y - 1] === '.') {
                if (isExit(x, y - 1)) {
                    return result;
                }
                nNodes.push([x, y - 1, ]);
            }
        }
        nodes = nNodes;
    }
    return -1;
};
