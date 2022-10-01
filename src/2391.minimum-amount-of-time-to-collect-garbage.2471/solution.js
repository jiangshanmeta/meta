/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
    const exprense = [0, ];
    for (let i = 0; i < travel.length; i++) {
        exprense[i + 1] = exprense[i] + travel[i];
    }
    let M = 0;
    let P = 0;
    let G = 0;
    let mi = 0;
    let pi = 0;
    let gi = 0;
    for (let i = 0; i < garbage.length; i++) {
        for (const c of garbage[i]) {
            if (c === 'M') {
                M++;
                mi = i;
            } else if (c === 'P') {
                P++;
                pi = i;
            } else {
                G++;
                gi = i;
            }
        }
    }

    return M + P + G + exprense[mi] + exprense[pi] + exprense[gi];
};
