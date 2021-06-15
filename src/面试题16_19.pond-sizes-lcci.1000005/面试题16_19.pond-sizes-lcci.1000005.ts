function pondSizes (land: number[][]): number[] {
    const result:number[] = [];
    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[0].length; j++) {
            if (land[i][j] === 0) {
                result.push(dfs(land, i, j));
            }
        }
    }
    result.sort((a, b) => a - b);
    return result;
}

function dfs (land:number[][], x:number, y:number):number {
    if (x < 0 || y < 0 || x === land.length || y === land[0].length || land[x][y] !== 0) {
        return 0;
    }
    let result = 1;
    land[x][y] = 1;
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            result += dfs(land, x + dx, y + dy);
        }
    }
    return result;
}
