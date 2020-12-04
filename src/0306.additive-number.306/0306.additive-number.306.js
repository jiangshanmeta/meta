/**
 * @param {string} num
 * @return {boolean}
 */

function check (val1, val2, rest) {
    if (rest === '') {
        return true;
    }
    const val3 = (+val1) + (+val2) + '';

    if (rest.startsWith(val3)) {
        return check(val2, val3, rest.slice(val3.length));
    }
    return false;
}

var isAdditiveNumber = function (num) {
    // index1是第一个数结束位置(不含)
    // index2是第二个数结束位置(不含)
    for (let index1 = 1; index1 < num.length - 1; index1++) {
        const val1 = num.slice(0, index1);
        if (val1.length > 1 && val1[0] === '0') {
            continue;
        }
        for (let index2 = index1 + 1; index2 < num.length; index2++) {
            const val2 = num.slice(index1, index2);
            if (val2.length > 1 && val2[0] === '0') {
                continue;
            }

            if (check(val1, val2, num.slice(index2))) {
                return true;
            }
        }
    }
    return false;
};
