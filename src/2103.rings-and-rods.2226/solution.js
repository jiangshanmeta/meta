/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
    const rgb = {
        R: new Array(10).fill(false),
        G: new Array(10).fill(false),
        B: new Array(10).fill(false),
    };
    for (let i = 0; i < rings.length; i += 2) {
        rgb[rings[i]][rings[i + 1]] = true;
    }
    let result = 0;
    for (let i = 0; i < 10; i++) {
        if (rgb.R[i] && rgb.G[i] && rgb.B[i]) {
            result++;
        }
    }
    return result;
};
