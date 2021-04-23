/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function (picture) {
    const M = picture.length;
    if (M === 0) {
        return 0;
    }
    const N = picture[0].length;
    const vertical = new Array(M).fill(0);
    const horizontal = new Array(N).fill(0);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (picture[i][j] === 'B') {
                horizontal[j]++;
                vertical[i]++;
            }
        }
    }
    let result = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (picture[i][j] === 'B' && horizontal[j] === 1 && vertical[i] === 1) {
                result++;
            }
        }
    }
    return result;
};
