/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    // 有重复的所以要排个序
    tiles = tiles.split('').sort();
    const visited = new Array(tiles.length).fill(false);
    return backTracking(tiles, visited);
};

function backTracking (tiles, visited) {
    let result = 0;
    for (let i = 0; i < tiles.length; i++) {
        if (visited[i]) {
            continue;
        }
        // 处理重复出现的字符
        if (i > 0 && tiles[i] === tiles[i - 1] && !visited[i - 1]) {
            continue;
        }
        result++;
        visited[i] = true;
        result += backTracking(tiles, visited);
        visited[i] = false;
    }
    return result;
}
