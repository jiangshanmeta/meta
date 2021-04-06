/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    let changed = false;
    let firstIndex = -1;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) {
            continue;
        }
        if (changed) {
            return false;
        }
        if (firstIndex === -1) {
            firstIndex = i;
        } else {
            if (s1[firstIndex] === s2[i] && s1[i] === s2[firstIndex]) {
                changed = true;
                continue;
            }
            return false;
        }
    }
    if (firstIndex !== -1 && !changed) {
        return false;
    }
    return true;
};
