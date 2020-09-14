/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
var findSwapValues = function (array1, array2) {
    const map2 = Object.create(null);
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }
    for (let i = 0; i < array2.length; i++) {
        map2[array2[i]] = true;
        sum2 += array2[i];
    }
    const diff = sum2 - sum1;
    if (diff & 1) {
        return [];
    }
    const half = diff >> 1;
    for (let i = 0; i < array1.length; i++) {
        if (map2[array1[i] + half]) {
            return [
                array1[i], array1[i] + half, ];
        }
    }

    return [];
};
