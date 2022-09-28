/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) {
        return image;
    }
    dfs(sr, sc, image, image[sr][sc], newColor);
    return image;
};

function dfs (x, y, image, source, target) {
    if (x < 0 || y < 0 || x >= image.length || y >= image[0].length || image[x][y] !== source) {
        return;
    }
    image[x][y] = target;
    dfs(x - 1, y, image, source, target);
    dfs(x + 1, y, image, source, target);
    dfs(x, y - 1, image, source, target);
    dfs(x, y + 1, image, source, target);
}
