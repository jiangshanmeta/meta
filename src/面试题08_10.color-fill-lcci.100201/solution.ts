function floodFill (image: number[][], sr: number, sc: number, newColor: number): number[][] {
    dfs(image, sr, sc, image[sr][sc], newColor);
    return image;
}

function dfs (image:number[][], x:number, y:number, oldColor:number, newColor:number) {
    if (x < 0 || y < 0 || x === image.length || y === image[0].length || image[x][y] !== oldColor || image[x][y] === newColor) {
        return;
    }
    image[x][y] = newColor;
    dfs(image, x - 1, y, oldColor, newColor);
    dfs(image, x + 1, y, oldColor, newColor);
    dfs(image, x, y - 1, oldColor, newColor);
    dfs(image, x, y + 1, oldColor, newColor);
}
