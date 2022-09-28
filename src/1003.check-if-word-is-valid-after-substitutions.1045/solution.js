/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function (S) {
    if (S.length % 3 !== 0) {
        return false;
    }
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'a') {
            aCount++;
        } else if (S[i] === 'b') {
            // b的数量不能超过a的数量
            if (aCount === bCount) {
                return false;
            }
            bCount++;
        } else {
            // c的数量不能超过a的数量 也不能超过b的数量
            if (aCount === cCount || bCount === cCount) {
                return false;
            }
            cCount++;
        }
    }

    return aCount === bCount && bCount === cCount;
};
