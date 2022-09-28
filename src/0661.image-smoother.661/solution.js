/**
 * @param {number[][]} M
 * @return {number[][]}
 */
// 就是暴力算啊
var imageSmoother = function (M) {
    if (M.length === 1 && M[0].length === 1) {
        return M;
    }

    const image = Array.apply(null, {
        length: M.length,
    }).map(() => new Array(M[0].length));
    const maxX = M.length - 1;
    const maxY = M[0].length - 1;

    for (let i = 1; i < maxX; i++) {
        for (let j = 1; j < maxY; j++) {
            image[i][j] = ((M[i - 1][j - 1] + M[i - 1][j] + M[i - 1][j + 1] + M[i][j - 1] + M[i][j] + M[i][j + 1] + M[i + 1][j - 1] + M[i + 1][j] + M[i + 1][j + 1]) / 9) | 0;
        }
    }

    if (maxX === 0) {
        for (let j = 1; j < maxY; j++) {
            image[0][j] = ((M[0][j - 1] + M[0][j] + M[0][j + 1]) / 3) | 0;
        }
        image[0][0] = ((M[0][0] + M[0][1]) / 2) | 0;
        image[0][maxY] = ((M[0][maxY] + M[0][maxY - 1]) / 2) | 0;
        return image;
    } else if (maxY === 0) {
        for (let i = 1; i < maxX; i++) {
            image[i][0] = ((M[i - 1][0] + M[i][0] + M[i + 1][0]) / 3) | 0;
        }
        image[0][0] = ((M[0][0] + M[1][0]) / 2) | 0;
        image[maxX][0] = ((M[maxX][0] + M[maxX - 1][0]) / 2) | 0;
        return image;
    }
    // else{
    for (let j = 1; j < maxY; j++) {
        image[0][j] = ((M[0][j - 1] + M[0][j] + M[0][j + 1] + M[1][j - 1] + M[1][j] + M[1][j + 1]) / 6) | 0;
        image[maxX][j] = ((M[maxX][j - 1] + M[maxX][j] + M[maxX][j + 1] + M[maxX - 1][j - 1] + M[maxX - 1][j] + M[maxX - 1][j + 1]) / 6) | 0;
    }

    for (let i = 1; i < maxX; i++) {
        image[i][0] = ((M[i - 1][0] + M[i - 1][1] + M[i][0] + M[i][1] + M[i + 1][0] + M[i + 1][1]) / 6) | 0;
        image[i][maxY] = ((M[i - 1][maxY] + M[i - 1][maxY - 1] + M[i][maxY] + M[i][maxY - 1] + M[i + 1][maxY] + M[i + 1][maxY - 1]) / 6) | 0;
    }

    image[0][0] = ((M[0][0] + M[0][1] + M[1][0] + M[1][1]) / 4) | 0;
    image[maxX][0] = ((M[maxX][0] + M[maxX][1] + M[maxX - 1][0] + M[maxX - 1][1]) / 4) | 0;
    image[0][maxY] = ((M[0][maxY] + M[0][maxY - 1] + M[1][maxY] + M[1][maxY - 1]) / 4) | 0;
    image[maxX][maxY] = ((M[maxX][maxY] + M[maxX][maxY - 1] + M[maxX - 1][maxY] + M[maxX - 1][maxY - 1]) / 4) | 0;
    return image;
    // }
};
