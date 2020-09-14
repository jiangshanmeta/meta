/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
    if (A.length !== B.length) {
        return false;
    }
    let count = 0;
    let index1;
    // 处理A B完全一致的情况，此时必须有重复的元素才能交换
    const map = {};
    let duplicate = false;

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            count++;
            if (count === 1) {
                index1 = i;
            } else if (count === 2) {
                if (A[i] !== B[index1] || A[index1] !== B[i]) {
                    return false;
                }
            } if (count === 3) {
                return false;
            }
        } else {
            if (map[A[i]] === undefined) {
                map[A[i]] = true;
            } else {
                duplicate = true;
            }
        }
    }
    return count === 2 || (count === 0 && duplicate);
};
