/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    const countS = statistic(s);
    const countT = statistic(target);
    let result = s.length;
    for (let i = 0; i < countT.length; i++) {
        if (countT[i] === 0) {
            continue;
        }
        result = Math.min(result, (countS[i] / countT[i]) | 0);
    }

    return result;
};

function statistic (s) {
    const result = new Array(26).fill(0);
    for (const c of s) {
        result[c.charCodeAt(0) - 97]++;
    }
    return result;
}
