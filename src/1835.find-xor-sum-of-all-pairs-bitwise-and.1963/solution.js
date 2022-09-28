/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = function (arr1, arr2) {
    let xors1 = 0;
    for (let i = 0; i < arr1.length; i++) {
        xors1 ^= arr1[i];
    }
    let xors2 = 0;
    for (let i = 0; i < arr2.length; i++) {
        xors2 ^= arr2[i];
    }
    return xors1 & xors2;
};
