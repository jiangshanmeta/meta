/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
    const beforeList = new Array(a.length);
    beforeList[0] = 1;
    let before = a[0];
    for (let i = 1; i < a.length; i++) {
        beforeList[i] = before;
        before *= a[i];
    }
    const afterList = new Array(a.length);
    afterList[afterList.length - 1] = 1;
    let after = a[a.length - 1];
    for (let i = a.length - 2; i > -1; i--) {
        afterList[i] = after;
        after *= a[i];
    }
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = beforeList[i] * afterList[i];
    }
    return result;
};
