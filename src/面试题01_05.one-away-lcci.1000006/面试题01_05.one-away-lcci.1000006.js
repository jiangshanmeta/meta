/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
    if (Math.abs(first.length - second.length) > 1) {
        return false;
    }
    let index1 = 0;
    let index2 = 0;
    let flag = false;
    while (index1 < first.length && index2 < second.length) {
        if (first[index1] !== second[index2]) {
            if (flag) {
                return false;
            }
            flag = true;
            if (first.length === second.length) {
                index1++;
                index2++;
            } else if (first.length > second.length) {
                index1++;
            } else {
                index2++;
            }
        } else {
            index1++;
            index2++;
        }
    }
    return true;
};
