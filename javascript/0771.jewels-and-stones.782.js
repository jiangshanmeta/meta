/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    const jMap = {};
    for (let i = 0; i < J.length; i++) {
        jMap[J[i]] = true;
    }
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (jMap[S[i]]) {
            count++;
        }
    }
    return count;
};
