/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {
    let count = 0;
    let xy = 0;
    let yx = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) {
            continue;
        }
        if (s1[i] === 'x') {
            xy++;
        } else {
            yx++;
        }
        count++;
    }
    if (count & 1) {
        return -1;
    }
    let result = 0;
    result += (xy >> 1);
    xy %= 2;
    result += (yx >> 1);
    yx %= 2;
    if (xy && yx) {
        result += 2;
    }
    return result;
};
