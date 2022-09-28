/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function (rungs, dist) {
    let result = 0;
    for (let i = 0; i < rungs.length; i++) {
        const prev = i > 0 ? rungs[i - 1] : 0;
        const diff = rungs[i] - prev;
        if (diff <= dist) {
            continue;
        }
        result += Math.ceil((diff - dist) / dist);
    }
    return result;
};
